var net = require('net');

let Request = require('./Request');
let Response = require('./Response');
let Headers = require('./Headers');

class Server {
	/**
	*@constructor
	*@param verify callback used to verify the request
	*@param success callback used on a successful request verification
	*@param failure callback used for a failed request verification
	*/
	constructor(verify, success, failure) {
		this.server =  net.createServer((c) => {

			c.on('close', () => {
				console.log(`\t${c.id}'s session is closed.\n`);
			});

			c.on('data', (arg) => {
				let req = arg.toString('ascii'); // turn bytes into string

				const reqString = req; // get a copy of the string in the event of failure

				try {
					req = verify(c, req);

					req.headers.add('ID', c.id);
					req.headers.add('RemoteAddress', c.remoteAddress);
					req.headers.add('RemotePort', c.remotePort);

				} catch (err) {
					// log the failure. It is possiblle c.id is undefined
					console.log(`${c.id} requests:\n${reqString}`);

					failure(c, err);

					return;
				}

				let res = new Response('OK'); // make a new OK response

				// add the CSeq and Session required headers
				res.headers.add('CSeq', c.cSeq);
				res.headers.add('Session', c.session)

				success(req, res);

				console.log(`Server response:\n${res.toString()}`);

				if (req.type == 'UNREGISTER') {
					c.end(res.toString());
					return;
				}
				c.write(res.toString());
			});
		});

		this.server.on('error', (err) => {
			throw err;
		});
	}

	/**
	*Start the server
	*@param {number} [port=8124] the port the server should listen on.
	*/
	listen(port) {
		this.server.listen(port||8124, () => {
			console.log(`Stock Exchange Server available at localhost:${this.server.address().port}\n\n\n`);
		});
	}
}

module.exports = Server;
