const StockMarket = require('./StockMarket');

const dataGenerator = require('./dataGenerator');

/**
* Manages the flow of data between procuders and observers
* @class RealtimeData
* @extends StockMarket
* @see Display
* @export
*/
class RealtimeData extends StockMarket {
  /**
  *@constructor
  */
  constructor() {
    super();
    this.companies = dataGenerator(this);
  }

  /**
  * Register a new Display to receive notifications about new realtime data
  *@param {Display} display The Display to register
  */
  register(display) {
    super.register(display);
  }

  /**
  * Unregister an existing Display to stop receiving notifications about new realtime data
  *@param {number} id The id of the Display to unregister
  */
  unRegister(id) {
    super.unRegister(id);
  }

  /**
  * New realtime data is available, so send it to all registered Displays
  */
  notify() {
    super.notify();
  }
}

module.exports = RealtimeData;
