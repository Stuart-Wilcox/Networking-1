const StockMarket = require('./StockMarket');

class RealtimeData extends StockMarket {
  constructor() {
    super();
    this.companies = []; // get the companies somehow
  }

  register(stockMarketDisplay) {
    super.register(stockMarketDisplay);
  }

  unRegister(stockMarketDisplay) {
    super.unRegister(stockMarketDisplay);
  }

  notify() {
    super.notify();
  }
}
