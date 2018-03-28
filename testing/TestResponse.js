const assert = require('assert');

const Response = require('../backend/Response');


const resString = 'SME/TCP-1.0 OK\r\nCSeq: 1 Session: 1234';
const res = new Response(resString);

assert.equal(res.status, 'OK');
assert.equal(res.protocol, 'SME/TCP-1.0');

assert.equal(res.headers.get('CSeq'), '1');
assert.equal(res.headers.get('Session'), '1234');
