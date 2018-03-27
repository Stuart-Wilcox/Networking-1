let Order require('./Order');

class BuyOrder extends Order {
	constructor(date, size, price) {
		super(date, size, price);
	}

	getPrice() {
		super.getPrice();
	}

	setPrice(price) {
		super.setPrice(price);
	}
}

modeule.exports = BuyOrder;
