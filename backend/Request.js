let Headers = require('./Headers');
// SME request class
class Request {
	/**
	*@param req is the request as a string
	*/
	constructor(req) {
		// split the lines
		const lines = req.split('\r\n');
		if(lines.length != 2) {
			throw Error("Invalid request. Incorrect amount of lines.");
		}

		// split the first line by spaces
		const protocolWords = lines[0].split(' ');
		this.type = '';

		for(let i = 0; i < protocolWords.length; i++) {
			if(protocolWords[i].includes('SME')) {
				this.protocol = protocolWords[i];
			} else {
				this.type += protocolWords[i];
			}
		}

		this.headers = new Headers(lines[1]);
	}
}

module.exports = Request;
