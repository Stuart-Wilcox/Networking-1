let Headers = require('./Headers');
// SME response class
class Response {
	constructor(status, headers, protocol) {
		this.status = status || 'FAIL';
		this.headers = headers || new Headers();
		this.protocol = protocol || 'SME/TCP-1.0';
	}

	toString() {
		return `${this.protocol} ${this.status}\r\n${this.headers.toString()}\r\n`;
	}

	static fromString(res) {
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
