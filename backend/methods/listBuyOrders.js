const realtimeData = require('../models/dataManager').getRealtimeData();

module.exports = {
  type: 'LISTBUYORDERS',
  handle(req, res) {
    const buyOrders = {};

    for (let i = 0;  i < realtimeData.companies.length; i++) {
      buyOrders[realtimeData.companies[i].ticker] = [];

      for (let j = 0; j < realtimeData.companies[i].buyOrders.length; j++) {
        buyOrders[realtimeData.companies[i].ticker].push(
          {
            size: realtimeData.companies[i].buyOrders[j].size,
            price: realtimeData.companies[i].buyOrders[j].price,
            timestamp: realtimeData.companies[i].buyOrders[j].timestamp,
          }
        );
      }
    }

    res.headers.add('Data', JSON.stringify(buyOrders));
  },
}
