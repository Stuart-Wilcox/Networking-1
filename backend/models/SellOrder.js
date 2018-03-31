let Order = require('./Order');

class SellOrder extends Order {
	/**
	*@constructor
	*@param {Date} date
	*@param {number} size
	*@param {number} price
	*@see Order
	*/
	constructor(date, size, price) {
		super(date, size, price);
	}

	getPrice() {
		return super.getPrice();
	}

	setPrice(price) {
		super.setPrice(price);
	}
}

module.exports = SellOrder;
