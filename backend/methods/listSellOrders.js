const realtimeData = require('../models/dataManager').getRealtimeData();

module.exports = {
  type: 'LISTSELLORDERS',
  handle(req, res) {
    const sellOrders = {};

    for (let i = 0;  i < realtimeData.companies.length; i++) {
      sellOrders[realtimeData.companies[i].ticker] = [];

      for (let j = 0; j < realtimeData.companies[i].sellOrders.length; j++) {
        sellOrders[realtimeData.companies[i].ticker].push(
          {
            size: realtimeData.companies[i].sellOrders[j].size,
            price: realtimeData.companies[i].sellOrders[j].price,
            timestamp: realtimeData.companies[i].sellOrders[j].timestamp,
          }
        );
      }
    }

    res.headers.add('Data', JSON.stringify(sellOrders));
  },
}
