const realtimeData = require('../models/dataManager').getRealtimeData();

module.exports = {
  type: 'LISTSELLORDERS',
  handle(req, res) {
    const sellOrders = {};

    for (let i = 0; i < realtimeData.companies.length; i++) {
      let companySellOrders = [];
      for (let j = 0; j < realtimeData.companies[i].sellOrders.length; i++) {
        companySellOrders.push({
          size: realtimeData.companies[i].sellOrders.size,
          price: realtimeData.companies[i].sellOrders.price,
          timestamp: realtimeData.companies[i].sellOrders.timestamp,
        });
      }
      sellOrders[realtimeData.companies[i].ticker] = companySellOrders;
    }

    res.headers.add('Data', JSON.stringify(sellOrders));
  },
}
