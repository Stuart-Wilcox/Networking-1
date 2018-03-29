let Order = require('./Order');

class SellOrder extends Order {
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
