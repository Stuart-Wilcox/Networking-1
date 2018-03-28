var net = require('net');

let Request = require('./Request');
let Response = require('./Response');
let Headers = require('./Headers');

let server = net.createServer((c) => {

	c.on('close', () => {
		console.log(`${c.id}'s session is closed.`);
	});

	c.on('data', (arg) => {
		let req = arg.toString('ascii');

		try{
			req = new Request(req);
			if (!c.id) {
				c.id = req.headers.get('ID');
				console.log(`Trader "${c.id}" at (${c.remoteAddress}:${c.remotePort}): is connected.\n`);
			}
			console.log(`${c.id} requests:\n${req}`);
		} catch (err) {
			console.log(`${c.id} requests:\n${req}`);
			const failHeaders = new Headers();
			failHeaders.add('Details', err.message);

			const res = new Response('FAIL', failHeaders);

			console.log(`Server response:\n${res.toString()}`);

			return c.end(res.toString());
		}

		let res = new Response('OK');

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
