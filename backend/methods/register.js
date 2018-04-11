const realtimeData = require('../models/dataManager').getRealtimeData();
const Display = require('../models/Display');

const StockMarketDisplay = require('../models/StockMarketDisplay');

module.exports = {
  type: 'REGISTER',
  handle(req, res) {
    let port = req.headers.get('Notification Port');
    let addr = req.headers.get('Address');

    if (port && addr){
      let display = new StockMarketDisplay(addr, port);
      realtimeData.register(display);
    } else {
      throw Error('Port or Address is undefined');
    }
  },
}
