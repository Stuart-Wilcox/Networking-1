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

	addOrder(order) {
		// TODO check for a transaction
		if(typeof(order) == 'BuyOrder') {
			this.buyOrders.push(order);
		} else if (type(order) == 'SellOrder') {
			this.sellOrders.push(order);
		}
		this.stockMarket.notify();
	}
}

module.exports = Company;
