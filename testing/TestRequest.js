const assert = require('assert');

const Request = require('../backend/Request');


const reqString = 'REGISTER SME/TCP-1.0\r\nID: Alice CSeq: 1 Notification Port: 3700';
const req = new Request(reqString);

assert.equal(req.type, 'REGISTER');
assert.equal(req.protocol, 'SME/TCP-1.0');

assert.equal(req.headers.get('ID'), 'Alice');
assert.equal(req.headers.get('CSeq'), '1');
assert.equal(req.headers.get('Notification Port'), '3700');
