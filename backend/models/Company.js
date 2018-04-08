class Company {
	constructor(stockMarket, name, ticker, openPrice) {
		this.stockMarket = stockMarket;

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

	addBuyOrder(order) {
		// TODO check for a transaction
		this.buyOrders.push(order);
		this.stockMarket.notify();
	}

	addSellOrder(order) {
		// TODO check for a transaction
		this.sellOrders.push(order);
		this.stockMarket.notify();
	}
}

module.exports = Company;
