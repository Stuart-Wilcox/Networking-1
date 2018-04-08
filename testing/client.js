var net = require('net');

let type = 'LIST COMPANIES';

if (process.argv.length > 2) {
  type = process.argv[2];
}

const sock = net.Socket();
let count = 0;

sock.connect({ port: 8124 }, (() => {
  sock.write(`REGISTER SME/TCP-1.0\r\nID: Stu CSeq: ${count} Notification Port: 100\r\n`);
  sock.on('data', (arg) => {
    console.log(arg.toString('ascii'));
    if(count < 2){
      count++;
      sock.write(`${type} SME/TCP-1.0\r\nID: Stu CSeq: ${count} Data: {"MSFT":{"size":5,"price":35,"timestamp":"17/02/2018 11:55:00 PM"}} \r\n`);
    } else {
      sock.end();
    }
  });
}));
