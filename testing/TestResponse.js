const assert = require('assert');

const Response = require('../backend/Response');


const resString = 'SME/TCP-1.0 OK\r\nCSeq: 1 Session: 1234';
const res = new Response(resString);

console.log(res);
