const realtimeData = require('../models/dataManager').getRealtimeData();

const BuyOrder = require('../models/BuyOrder');

module.exports = {
  type: 'BUYORDER',
  handle(req, res) {
    let data = req.headers.get('Data');

    // data.MSFT or data.AAPL

    for (let i = 0; i < realtimeData.companies.length; i++) {
      const ticker = realtimeData.companies[i].ticker;
      if (data[ticker]) {
        // some bueno data for company i
        const buyOrder = new BuyOrder(realtimeData.companies[i], data.date, data.size, data.price);
      }
    }
  },
}
