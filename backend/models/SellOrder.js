let Order = require('./Order');

class SellOrder extends Order {
	/**
	*@constructor
	*@param {Date} date
	*@param {number} size
	*@param {number} price
	*@see Order
	*/
	constructor(company, timestamp, size, price) {
		super(company, timestamp, size, price);
		company.addSellOrder(this);
	}

	getPrice() {
		return super.getPrice();
	}

	setPrice(price) {
		super.setPrice(price);
	}
}

module.exports = SellOrder;
