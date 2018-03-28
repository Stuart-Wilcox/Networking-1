var net = require('net');

let Request = require('./Request');
let Response = require('./Response');

let server = net.createServer(c => {
	console.log('Client connected');
	c.on('end', () => {
		console.log('Client disconnected');
	});

	c.on('close', () => {
		console.log('Connection closed');
	});

	c.on('data', (arg) => {
		let req = arg.toString('ascii');

		req = new Request(req);

		console.log(req);

		let res = new Response('OK');
		c.write(res.toString());
	});
});

server.on('error', (err) => {
	throw err;
});

server.listen(8124, () => {
	console.log('server bound');
});
