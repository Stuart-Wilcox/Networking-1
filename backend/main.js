const verifyRequest = require('./handlers/verifyRequest');
const handleFailure = require('./handlers/handleFailure');
const requestHandler = require('./handlers/requestHandler');

const Server = require('./sme/Server');

const server = new Server(verifyRequest, requestHandler, handleFailure);

server.listen();
