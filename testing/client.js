var net = require('net');

let type = 'LIST COMPANIES';

if (process.argv.length > 2) {
  type = process.argv[2];
}

const sock = net.Socket();
let count = 0;

sock.connect({ port: 8124 }, (() => {
  sock.write(`REGISTER SME/TCP-1.0\r\nID: Stu CSeq: ${count++} Notification Port: 9000\r\n`);
  sock.on('data', (arg) => {
    console.log(arg.toString('ascii'));
    if (count == 1) {
      sock.write(`BUYORDER SME/TCP-1.0\r\nID: Stu CSeq: ${count++} Data: { "MSFT": {"size": 5, "price": 35, "timestamp": "17/02/2018 11:55:00 PM"}}\r\n`);
    }
    else if (count == 2) {
      sock.write(`LISTBUYORDERS SME/TCP-1.0\r\nID: Stu CSeq: ${count++}\r\n`);
    }
    else if (count == 3) {
      sock.write(`SELLORDER SME/TCP-1.0\r\nID: Stu CSeq: ${count++} Data: {"MSFT": {"size": 5, "price": 35, "timestamp": "17/02/2018 11:55:00 PM"}}\r\n`);
    }
    else if (count == 4) {
      sock.write(`LISTSELLORDERS SME/TCP-1.0\r\nID: Stu CSeq: ${count++}\r\n`);
    }
    else if (count == 5) {
      sock.write(`UNREGISTER SME/TCP-1.0\r\nID: Stu CSeq: ${count++}\r\n`);
    }
  });
}));
