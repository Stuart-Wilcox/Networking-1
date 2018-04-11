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
		for(let i = 0; i <  this.sellOrders.length; i++) {
			if (this.sellOrders[i].price === order.price) {
				// a transaction will be made
				const sellOrder = this.sellOrders[i];

				// update volume and lastPrice
				this.volume += Math.min(sellOrder.size, order.size);
				this.lastPrice = order.price;

				if(sellOrder.size > order.size) {
					// more sellOrders than buyOrders

					sellOrder.size -= order.size; // reduce the sell order size
					// dont add the buyOrder

					return;
				}
				else if (sellOrder.size < order.size) {
					// more buyOrders than sellOrders

					order.size -= sellOrder.size; // reduce the size of the buy order
					this.sellOrders.splice(i, 1); // remove the sell order from the list

					continue; // there could be more orders to make transactions on
				}
				else {
					// same amount of sellOrder as buyOrders

					this.sellOrders.splice(i, 1); // remove the sell order from the list
					// dont add the buyOrder to the list

					return;
				}
			}
		}

		this.buyOrders.push(order); // if we get here then the buyOrder needs to be added
		this.stockMarket.notify(); // notify the new buyOrder
	}

	/**
	* Adds a sell order to the company. A transaction may ensue
	* @param {SellOrder} order The sell order to be added
	* @see {Order}
	* @see {SellOrder}
	*/
	addSellOrder(order) {
		for(let i = 0; i <  this.buyOrders.length; i++) {
			if (this.buyOrders[i].price === order.price) {
				// a transaction will be made
				const buyOrder = this.buyOrders[i];

				// update volume and lastPrice
				this.volume += Math.min(buyOrder.size, order.size);
				this.lastPrice = order.price;

				if(buyOrder.size > order.size) {
					// more buyOrders than sellOrders

					buyOrder.size -= order.size; // reduce the sell order size
					// dont add the buyOrder

					this.stockMarket.notify(); // notify the new SellOrder
					return;
				}
				else if (buyOrder.size < order.size) {
					// more sellOrders than buyOrders

					order.size -= buyOrder.size; // reduce the size of the buy order
					this.buyOrders.splice(i, 1); // remove the sell order from the list

					continue; // there could be more orders to make transactions on
				}
				else {
					// same amount of sellOrder as buyOrders

					this.buyOrders.splice(i, 1); // remove the sell order from the list
					// dont add the buyOrder to the list

					this.stockMarket.notify(); // notify the new SellOrder
					return;
				}
			}
		}


		this.sellOrders.push(order); // if we get here then the buyOrder needs to be added
		this.stockMarket.notify(); // notify the new SellOrder
	}
}

module.exports = Company;
