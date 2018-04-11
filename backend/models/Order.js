class Order {
	/**
	*@constructor
	*@param {Company} company
	*@param {Date} date
	*@param {number} size
	*@param {number} price
	*@see BuyOrder
	*@see SellOrder
	*/
	constructor(company, timestamp, size, price) {
		this.timestamp = timestamp;
		this.size = size;
		this.price = price;

		this.company = company;
	}

	/**
	*@return {number} The price
	*/
	getPrice() {
		return this.price;
	}

	/**
	*@param {number} price
	*/
	setPrice(price) {
		this.price = price;
	}
}

module.exports = Order;
