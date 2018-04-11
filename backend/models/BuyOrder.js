let Order = require('./Order');

/**
* Data type to represent a buy order, which is attributed to a company
* @class BuyOrder
* @extends Order
* @see {Order}
* @export
*/
class BuyOrder extends Order {
	/**
	*@constructor
	*@param {Company} company The company the Buy Order is for
	*@param {Date} timestamp The timestamp of the Buy Order
	*@param {number} size The volume of shares of the Buy Order
	*@param {number} price The desired price at which the Buy Order should be bought
	*@see Order
	*/
	constructor(company, timestamp, size, price) {
		super(company, timestamp, size, price);
		company.addBuyOrder(this);
	}

	/**
	* @return {number} The price of the buy order
	*/
	getPrice() {
		return super.getPrice();
	}

	/**
	* @param {number} price Sets the price of the BuyOrder
	*/
	setPrice(price) {
		super.setPrice(price);
	}
}

module.exports = BuyOrder;
