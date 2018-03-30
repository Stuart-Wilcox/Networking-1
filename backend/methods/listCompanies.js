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
        openPrice: realtimeData.companies[i].openPrice,
        currentPrice: realtimeData.companies[i].currentPrice,
        closedPrice: realtimeData.companies[i].closedPrice,
      });
    }

    res.headers.add('Data', JSON.stringify(companies));
  },
}
