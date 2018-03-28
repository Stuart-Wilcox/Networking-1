var net = require('net');

let Request = require('./Request');
let Response = require('./Response');
let Headers = require('./Headers');

let server = net.createServer(c => {
	console.log('***Client connected***\n');
	c.on('end', () => {
		console.log('***Client disconnected***\n');
	});

	c.on('close', () => {
		console.log('***Connection closed***\n');
	});

	c.on('data', (arg) => {
		console.log('***Data Received***\n\n');
		let req = arg.toString('ascii');

		try{
			req = new Request(req);
		} catch (err) {
			const failHeaders = new Headers();
			failHeaders.add('Details', err.message);

			return c.end(new Response('FAIL', failHeaders).toString());
		}

		console.log(req);

		let res = new Response('OK');
		c.write(res.toString());
	});
});

server.on('error', (err) => {
	throw err;
});

server.listen(8124, () => {
	console.log(`Stock Exchange Server available at localhost:${server.address().port}`);
});
