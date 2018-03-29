const StockMarket = require('./StockMarket');

const dataGenerator = require('./dataGenerator');

class RealtimeData extends StockMarket {
  constructor() {
    super();
    this.companies = dataGenerator(this);
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

module.exports = RealtimeData;
