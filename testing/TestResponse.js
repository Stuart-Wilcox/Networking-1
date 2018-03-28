const assert = require('assert');

const Response = require('../backend/Response');


const res = new Response('OK')
res.headers.add('CSeq', '1');
res.headers.add('Session', '1234');

assert.equal(res.status, 'OK');
assert.equal(res.protocol, 'SME/TCP-1.0');

assert.equal(res.headers.get('CSeq'), '1');
assert.equal(res.headers.get('Session'), '1234');
