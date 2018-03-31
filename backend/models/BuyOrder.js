let Order = require('./Order');

class BuyOrder extends Order {
	/**
	*@constructor
	*@param {Company} company The company the Buy  Order is for
	*@param {Date} date The date of the BuyOrder
	*@param {number} size The volume of shares of the BuyOrder
	*@param {number} price The desired price at which the BuyOrder should be bought
	*@see Order
	*/
	constructor(company, date, size, price) {
		super(company, date, size, price);
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
