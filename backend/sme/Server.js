let net = require('net');

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
		this.server =  net.createServer((sock) => {
			sock.inUse = true;

			sock.on('close', () => {
				console.log(`\t${sock.id}'s session is closed.\n`);
			});

			sock.on('data', (arg) => {

				// if the user has previously sent an UNREGISTER request, don't serve them
				if (!sock.inUse){
					return;
				}

				const reqString = arg.toString('ascii'); // turn bytes into string

				let req = reqString; // get a copy of the string in the event of failure

				try {
					req = verify(sock, req);
				} catch (err) {
					// log the failure. It is possiblle sock.id is undefined
					console.log(`${sock.id} requests:\n${reqString}`);

					failure(sock, err);

					return;
				}

				let res = new Response('OK'); // make a new OK response

				// add the CSeq and Session required headers
				res.headers.add('CSeq', sock.cSeq);
				res.headers.add('Session', sock.session);

				success(req, res);

				console.log(`Server response:\n${res.toString()}`);

				if (req.type === 'UNREGISTER') {
					// the client is ending their session
					sock.end(res.toString());
					sock.inUse = false;
					return;
				} else {
					sock.write(res.toString());
				}
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
