var net = require('net');

let server = net.createServer(c => {
	console.log('Client connected');
	c.on('end', () => {
		console.log('Client disconnected');
	});

	c.on('close', () => {
		console.log('Connection closed');
	});

	c.on('data', (arg) => {
		const req = arg.toString('ascii');
		console.log(req);

	});
});

server.on('error', (err) => {
	throw err;
});

server.listen(8124, () => {
	console.log('server bound');
});
