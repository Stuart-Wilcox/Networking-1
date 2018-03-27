class Order {
	constructor(date, size, price) {
		this.date = date;
		this.size = size;
		this.price = price;
	}

	getPrice() {
		return this.price;
	}

	setPrice(price) {
		this.price = price;
	}
}

module.exports = Order;
