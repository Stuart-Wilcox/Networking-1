const StockMarket = require('./StockMarket');

const dataGenerator = require('./dataGenerator');

class RealtimeData extends StockMarket {
  /**
  *@constructor
  */
  constructor() {
    super();
    this.companies = dataGenerator(this);
  }

  /**
  *@param {Display} display The Display to register
  */
  register(display) {
    super.register(display);
  }

  /**
  *@param {number} id The id of the Display to unregister
  */
  unRegister(id) {
    super.unRegister(id);
  }

  notify() {
    super.notify();
  }
}

module.exports = RealtimeData;
