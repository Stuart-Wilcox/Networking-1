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
			if(protocolWords[i].contains('SME') {
				this.protocol = protocolWords[i];
			} else {
				this.type += protocolWords[i];
			}
		}

		let headers = line[1];
		this.headers = [];
		headers = headers.replace(': ', ':'); // get rid of spacing around the colons
		headers = headers.split(' '); // split by spaces to get each header pair of name:value
		for(let i = 0; i < headers.length; i++) {
			const pair = headers[i].split(':');
			if (pair.length >
			this.headers.push({key: pair[0], value: pair[1]});
		}
	}
}

module.exports = Request;
