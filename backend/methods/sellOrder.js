const realtimeData = require('../models/dataManager').getRealtimeData();
const SellOrder = require('../models/SellOrder');

module.exports = {
  type: 'SELLORDER',
  handle(req, res) {
    const data = JSON.parse(req.headers.get('Data')); // turn into an object

    // figure out which company the buy order is for
    for (let i = 0; i < realtimeData.companies.length; i++) {
      if (data[realtimeData.companies[i].ticker]) {

        const sellOrder = new SellOrder(
          realtimeData.companies[i],
          data[realtimeData.companies[i].ticker].timestamp,
          data[realtimeData.companies[i].ticker].size,
          data[realtimeData.companies[i].ticker].price
        );
      }
    }
  },
}
