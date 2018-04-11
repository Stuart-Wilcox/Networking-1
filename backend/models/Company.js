/**
* Data type to represent a company, which maintains lists of
* buy and sell orders, and deals with making transactions as needed
* @class Company class
* @export
*/
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

	/**
	* @param {Number} price the price to set
	*/
	setLastPrice(lastPrice) {
		this.lastPrice = lastPrice;
	}

	/**
	* @return {Number} The last price of sale
	*/
	getLastPrice() {
		return this.lastPrice;
	}

	/**
	* @return {Number} The volume of shares traded of the company
	*/
	getVolume() {
		return this.volume;
	}

	/**
	* Adds a buy order to the company. A transaction may ensue
	* @param {BuyOrder} order The buy order to be added
	* @see {Order}
	* @see {BuyOrder}
	*/
	addBuyOrder(order) {
		// TODO check for a transaction
		this.buyOrders.push(order);
		this.stockMarket.notify();
	}

	/**
	* Adds a sell order to the company. A transaction may ensue
	* @param {SellOrder} order The sell order to be added
	* @see {Order}
	* @see {SellOrder}
	*/
	addSellOrder(order) {
		// TODO check for a transaction
		this.sellOrders.push(order);
		this.stockMarket.notify();
	}
}

module.exports = Company;
