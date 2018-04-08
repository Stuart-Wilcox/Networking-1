class Order {
	constructor(company, date, size, price) {
		this.date = date;
		this.size = size;
		this.price = price;

		this.company = company;
	}

	getPrice() {
		return this.price;
	}

	setPrice(price) {
		this.price = price;
	}
}

module.exports = Order;
