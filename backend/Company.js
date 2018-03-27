class Company {
	constructor(name, ticker, openPrice) {
		this.name = name;
		this.ticker = ticker;
		this.volume = 0;
		this.lastPrice = 0;
		this.openPrice = openPrice;
		this.buyOrders = [];
		this.sellOrders = [];
	}

	setLastPrice(lastPrice) {
		this.lastPrice = lastPrice;
	}

	getLastPrice() {
		return this.lastPrice;
	}

	getVolume() {
		return this.volume;
	}
}

module.exports = Company;
