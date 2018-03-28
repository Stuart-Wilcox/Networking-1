let Headers = require('./Headers');
let InvalidRequestError = require('./InvalidRequestError');
// SME request class
class Request {
	/**
	*@param req is the request as a string
	*/
	constructor(req) {
		this.reqString = req;
		// split the lines
		const lines = req.split('\r\n');
		if(lines.length != 3 || lines[2] != '') {
			throw new InvalidRequestError("Invalid request. Incorrect amount of lines.");
		}

		// make sure the protocol is included
		if (!lines[0].includes('SME')) {
			throw new InvalidRequestError("Invalid request. Protocol absent or on wrong line.");
		}

		// split the first line by spaces
		const protocolWords = lines[0].split(' ');
		this.type = '';

		for(let i = 0; i < protocolWords.length; i++) {
			if(protocolWords[i].includes('SME')) {
				this.protocol = protocolWords[i];
			} else {
				this.type += protocolWords[i]; // this gets rid of any spaces
			}
		}

		// make sure the type is of an approved sort
		this.checkType();

		this.headers = new Headers(lines[1]);
	}

	checkType() {
		const approvedTypes = [
			'REGISTER',
			'UNREGISTER',
			'LISTCOMPANIES',
			'LISTSELLORDERS',
			'LISTBUYORDERS',
			'SELLORDER',
			'BUYORDER',
		];

		// make sure the type is in the list (case insensitive)
		for (let i = 0; i < approvedTypes.length; i++) {
			if (this.type.toUpperCase() === approvedTypes[i]) {
				return;
			}
		}

		// type was not found
		throw new InvalidRequestError(`Invalid request. Specified request type "${this.type}" not understood.`);
	}

	toString() {
		return this.reqString;
	}
}

module.exports = Request;
