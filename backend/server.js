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

		try{
			req = new Request(req);
		} catch (Error) {
			c.write(new Response().toString());
		}

		console.log(req);

		let res = new Response('OK');
		c.write(res.toString());
	});
});

server.on('error', (err) => {
	throw err;
});

server.listen(process.env.PORT, () => {
	console.log(`Stock Exchange Server available at localhost:${server.address().port}`);
});
