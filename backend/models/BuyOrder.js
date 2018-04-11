let Order = require('./Order');

class BuyOrder extends Order {
	/**
	*@constructor
	*@param {Company} company The company the Buy  Order is for
	*@param {Date} timestamp The date of the BuyOrder
	*@param {number} size The volume of shares of the BuyOrder
	*@param {number} price The desired price at which the BuyOrder should be bought
	*@see Order
	*/
	constructor(company, timestamp, size, price) {
		super(company, timestamp, size, price);
		company.addBuyOrder(this);
	}

	/**
	*@return {number} The price
	*/
	getPrice() {
		super.getPrice();
	}

	/**
	*@param {number} price Sets the price of the BuyOrder
	*/
	setPrice(price) {
		super.setPrice(price);
	}
}

module.exports = BuyOrder;
