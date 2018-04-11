let Order = require('./Order');

/**
* Data type to represent a sell order, which is attributed to a company
* @class SellOrder
* @extends Order
* @see Order
* @export
*/
class SellOrder extends Order {
	/**
	*@constructor
	*@param {Date} date
	*@param {number} size
	*@param {number} price
	*/
	constructor(company, timestamp, size, price) {
		super(company, timestamp, size, price);
		company.addSellOrder(this);
	}

	/**
	* @return {Number} The price of the sell order
	*/
	getPrice() {
		return super.getPrice();
	}

	/**
	* @param {Number} price The price of the sell order
	*/
	setPrice(price) {
		super.setPrice(price);
	}
}

module.exports = SellOrder;
