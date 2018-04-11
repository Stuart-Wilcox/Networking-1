const realtimeData = require('../models/dataManager').getRealtimeData();

module.exports = {
  type: 'LISTCOMPANIES',
  handle(req, res) {
    // res.headers.add('Data', ALL_THE_COMPANIES)
    const companies = [];

    for (let i = 0; i < realtimeData.companies.length; i++) {
      companies.push({
        name: realtimeData.companies[i].name,
        ticker: realtimeData.companies[i].ticker,
        volume: realtimeData.companies[i].volume,
        openPrice: realtimeData.companies[i].openPrice,
        currentPrice: realtimeData.companies[i].lastPrice,
      });
    }

    res.headers.add('Data', JSON.stringify(companies));
  },
}
