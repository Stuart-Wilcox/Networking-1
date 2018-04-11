const realtimeData = require('../models/dataManager').getRealtimeData();
const SellOrder = require('../models/SellOrder');

module.exports = {
  type: 'SELLORDER',
  handle(req, res) {
    const data = req.headers.get('Data'); // get data object

    // figure out which company the buy order is for
    for (let i = 0; i < realtimeData.companies.length; i++) {
      const ticker = realtimeData.companies[i].ticker;
      if (data[ticker]) {

        const sellOrder = new SellOrder(
          realtimeData.companies[i],
          data[ticker].timestamp,
          data[ticker].size,
          data[ticker].price
        );
      }
    }
  },
}
