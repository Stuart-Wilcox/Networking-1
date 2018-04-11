const BuyOrder = require('../models/BuyOrder');
const realtimeData = require('../models/dataManager').getRealtimeData();

module.exports = {
  type: 'BUYORDER',
  handle(req, res) {
    const data = JSON.parse(req.headers.get('Data')); // turn into an object

    // figure out which company the buy order is for
    for (let i = 0; i < realtimeData.companies.length; i++) {
      if (data[realtimeData.companies[i].ticker]) {

        const buyOrder = new BuyOrder(
          realtimeData.companies[i],
          data[realtimeData.companies[i].ticker].timestamp,
          data[realtimeData.companies[i].ticker].size,
          data[realtimeData.companies[i].ticker].price
        );
      }
    }
  },
}
