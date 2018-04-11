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
	*@param {Company} company The company the Sell Order is for
	*@param {Date} timestamp The timestamp of the Sell Order
	*@param {number} size The volume of shares of the Sell Order
	*@param {number} price The desired price at which the Sell Order should be bought
	*@see Order
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
	* @param {Number} price Sets the price of the sell order
	*/
	setPrice(price) {
		super.setPrice(price);
	}
}

module.exports = SellOrder;
