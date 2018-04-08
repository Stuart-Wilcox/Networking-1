let Order = require('./Order');

class BuyOrder extends Order{
	constructor(company, date, size, price) {
		super(company, date, size, price);
		this.company.addBuyOrder(this);
	}

	getPrice() {
		super.getPrice();
	}

	setPrice(price) {
		super.setPrice(price);
	}
}

module.exports = BuyOrder;
