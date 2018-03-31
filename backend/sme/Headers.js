class Headers {
	/**
	*@param headers is the headers string
	*/
	constructor(headers) {
		this.keys = [];
		this.values = [];
		if (headers) {
			headers = headers.replace(/: /g, ':'); // get rid of spacing after colon
			headers = headers.replace(/, /g, ','); // get rid of spacing after comma
			headers = headers.replace(/{ /g, '{'); // get rid of spacing after open brace

			headers += ' '; // add a space on the end

			// change the header string into key/value pairs
			let key = '';
			let value = '';
			let state = true;
			for (let i = 0; i < headers.length; i++) {
				if (state) {
					// append the character to key unless its a colon
					if(headers[i] == ':') {
						state = false;
						continue;
					} else {
						key += headers[i];
					}
				} else {
					// append the character to value unless its a space
					if(headers[i] == '"') {
						value += headers[i];
						while (headers[++i] != '"') {
							value += headers[i];
						}
					}
					if(headers[i] == ' ') {
						state = true; // flip the state
						this.add(key, value); // add the key/value pair

						// reset the key and value
						key = '';
						value = '';
					} else {
						value += headers[i];
					}
				}
			}
		}
	}

	add(key, value) {
		// verify non null values
		if (key == null || value == null) {
			throw Error("Invalid request. Headers cannot have null key/value pairs.");
		}

		// verify integrity
		if (this.keys.length != this.values.length) {
			throw Error("Header error. Keys are mismatched with values");
		}

		for (let i = 0; i < this.keys.length; i++) {
			if(this.keys[i] == key) {
				// change the value if the key exists
				this.values[i] = value;
				return this;
			}
		}

		// add the new key/value pair
		this.keys.push(key);
		this.values.push(value);
	}

	get(key) {
		// just in case we have any degenerates
		if (key == null || key == undefined) {
			throw Error("Header error Key cannot be null or undefined");
		}

		// verify integrity
		if (this.keys.length != this.values.length) {
			throw Error("Header error. Keys are mismatched with values");
		}

		// find the key and return the value
		for(let i = 0; i < this.keys.length; i++) {
			if (this.keys[i] == key) {
				return this.values[i];
			}
		}

		// key not found
		return undefined;
	}

	toString() {
		// verify integrity
		if (this.keys.length != this.values.length) {
			throw Error("Header error. Keys are mismatched with values");
		}

		let headerString = '';

		for(let i = 0; i < this.keys.length; i++) {
			headerString += this.keys[i] + ': ' + this.values[i] + ' ';
		}

		return headerString;
	}
}

module.exports = Headers;
