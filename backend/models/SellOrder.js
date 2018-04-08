let Order = require('./Order');

class SellOrder extends Order {
	constructor(date, size, price) {
		super(date, size, price);

		this.company.addSellOrder(this);
	}

	getPrice() {
		return super.getPrice();
	}

	setPrice(price) {
		super.setPrice(price);
	}
}

module.exports = SellOrder;
