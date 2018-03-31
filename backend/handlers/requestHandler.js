const listCompanies = require('../methods/listCompanies');
const listBuyOrders = require('../methods/listBuyOrders');
const listSellOrders = require('../methods/listSellOrders');
const register = require('../methods/register');
const unRegister = require('../methods/unRegister');
const buyOrder = require('../methods/buyOrder');
const sellOrder = require('../methods/sellOrder');

/**
*@exports
*/
module.exports = (req, res) => {
  methods = [listCompanies, listBuyOrders, listSellOrders, register, unRegister, buyOrder, sellOrder];

  for(let i = 0; i < methods.length; i++) {
    if(req.type == methods[i].type) {
      methods[i].handle(req, res);
    }
  }
};
