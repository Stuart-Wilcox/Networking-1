var net = require('net');

let type = 'LIST COMPANIES';

if (process.argv.length > 2) {
  type = process.argv[2];
}

const sock = net.Socket();

sock.connect({ port: 8124 }, (() => {
  sock.write(`${type} SME/TCP-1.0\r\nID: Stu CSeq: 1\r\n`);
  // sock.on('data', (arg) => {
  //   console.log(arg.toString('ascii'));
  //   //sock.end();
  // });
}));
