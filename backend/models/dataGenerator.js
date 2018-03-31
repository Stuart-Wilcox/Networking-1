const Company = require('./Company');

/**
* A simple method to generate some fake company data
*@exports
*/
module.exports = (realtimeData) => {
  const companies = [];

  companies.push(new Company(realtimeData, 'Microsoft Corp.', 'MSFT', 46.13));
  companies.push(new Company(realtimeData, 'Apple, Inc.', 'AAPL', 102.79));
  companies.push(new Company(realtimeData, 'Facebook Inc.', 'FB', 68.05));

  return companies;
}
