const Request = require('../sme/Request');

/**
*@exports
*@param sock: the socket object corresponding to the connection
*@param req: the  incoming requst, as a string
*/
module.exports = (sock, req) => {
  const reqString = req; // get a copy of the string for logging later
  req = new Request(req);

  checkId(sock, req);
  checkCSeq(sock, req);

  console.log(`${sock.id} requests:\n${req}`);

  return req;
};


function checkId(sock, req) {
  //must have an ID
  if (!req.headers.get('ID')) {
    throw Error('Invalid request. ID header not found.');
  }

  // check if person has been identified yet
  if (!sock.id) {
    sock.id = req.headers.get('ID'); // get the new person's id

    console.log(`\tTrader "${sock.id}" at (${sock.remoteAddress}:${sock.remotePort }): is connected.\n`);

    // give the new person a random session number
    sock.session = Math.floor(Math.random()*10000);
  }
  else if (sock.id != req.headers.get('ID')) {
    // the supplied ID does not match the id ontiated at the start of the session
    throw Error(`Invalid ID. Expected ${sock.id} but got ${req.headers.get('ID')}`);
  }
};

function checkCSeq(sock, req) {
  // CSeq is required
  if (!req.headers.get('CSeq')) {
    throw Error('Invalid CSeq. CSeq header not found.');
  }

  const cSeq  = parseInt(req.headers.get('CSeq')); // get the CSeq as an int

  // check if the CSeq has been initialized
  if (!sock.cSeq) {
    sock.cSeq = cSeq; // get a copy of new person's intial CSeq
  }
  else if ((sock.cSeq + 1) == cSeq) {
    // valid CSeq
    sock.cSeq++; // increment CSeq for next request
  }
  else {
    throw Error(`Invalid CSeq. Expected ${sock.cSeq + 1} but got ${cSeq}`);
  }
};
