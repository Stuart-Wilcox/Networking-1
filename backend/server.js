var net = require('net');

let Request = require('./Request');
let Response = require('./Response');
let Headers = require('./Headers');

let requestHandler = require('./requestHandler');

let server = net.createServer((c) => {

	c.on('close', () => {
		console.log(`${c.id}'s session is closed.`);
	});

	c.on('data', (arg) => {
		let req = arg.toString('ascii'); // turn bytes into string

		try {
			req = new Request(req); // try to turn the request into a request object

			// check if the person was identified yet
			if (!c.id) {
				c.id = req.headers.get('ID');
				console.log(`Trader "${c.id}" at (${c.remoteAddress}:${c.remotePort }): is connected.\n`);
			}

			// must have a CSeq
			if (req.headers.get('CSeq')) {
				const CSeq = parseInt(req.headers.get('CSeq'));

				if (!c.CSeq) {
					// have no reference to the CSeq yet
					console.log("LJHGKJHGJKHGLJKHG");
					c.CSeq = CSeq;
				} else if ((c.CSeq + 1) == CSeq) {
					// CSeq was correctly incremented
					console.log("OOOOOOOOOOOOOOOOOOOOO");
					c.CSeq++; // increment our reference
				} else {
					throw Error(`nvalid CSeq value. Expected ${c.CSeq+1} but got ${CSeq}`);
				}
			} else {
				throw Error('Invalid intial request. CSeq missing.')
			}

			console.log(`${c.id} requests:\n${req}`);

		} catch (err) {

			console.log(`${c.id} requests:\n${req}`);

			const failHeaders = new Headers();
			failHeaders.add('Details', err.message); // return the details of the error

			const res = new Response('FAIL', failHeaders); // make the fail response

			console.log(`Server responds:\n${res.toString()}`);

			return c.end(res.toString()); // send the fail and end the connection
		}

		let res = new Response('OK'); // stubbed here
		res.headers.add('CSeq', c.CSeq);

		requestHandler(req, res);

		console.log(`Server response:\n${res.toString()}`);

		c.write(res.toString());
	});
});

server.on('error', (err) => {
	throw err;
});

server.listen(8124, () => {
	console.log(`Stock Exchange Server available at localhost:${server.address().port}\n\n\n`);
});
