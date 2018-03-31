const Headers = require('../sme/Headers');
const Response = require('../sme/Response');

/**
*@exports
*@param sock: the socket object corresponding to the connection
*@param err: the error object indicating the reason for failure
*/
module.exports = (sock, err) => {
  const failHeaders = new Headers();
  failHeaders.add('Details', err.message); // return the details of the error

  const res = new Response('FAIL', failHeaders); // make the fail response

  console.log(`Server responds:\n${res.toString()}`);

  return sock.write(res.toString()); // send the fail and end the connection

}
