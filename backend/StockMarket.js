class StockMarket{
	constructor() {
		this.displays = [];
	}
	register(stockMarketDisplay) {
		this.displays.push(stockMarketDisplay);
	}
	unRegister(stockMarketDisplay) {
		this.displays.splice(this.displays.indexOf(stockMarketDisplay), 1);
	}
	notify() {
		for(let i = 0; i < this.displays.length; i++) {
			this.displays[i].update(this);
		}
	}
}

module.exports = StockMarket;
