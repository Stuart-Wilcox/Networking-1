let Headers = require('./Headers');
// SME request class
class Response {
	/**
	*@param res is the request as a string
	*/
	constructor(res) {
		// split the lines
		const lines = res.split('\r\n');
		if(lines.length != 2) {
			throw Error("Invalid response. Incorrect amount of lines.");
		}

		this.status = '';
		// split the first line by spaces
		const protocolWords = lines[0].split(' ');

		for(let i = 0; i < protocolWords.length; i++) {
			if(protocolWords[i].includes('SME')) {
				this.protocol = protocolWords[i];
			} else {
				this.status += protocolWords[i];
			}
		}

		this.headers = new Headers(lines[1]);
	}
}

module.exports = Response;
