class Company {
	/**
	*@constructor
	*@param {StockMarket} StockMarket
	*@param {string} name The name of the company
	*@param {string} ticker The ticker (symbol) of the company
	*@param {number} [openPrice=0.0] The open price of the company
	*/
	constructor(stockMarket, name, ticker, openPrice) {
		this.stockMarket = stockMarket;

		this.name = name;
		this.ticker = ticker;
		this.volume = 0;
		this.lastPrice = 0;
		this.openPrice = openPrice || 0.0;
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
