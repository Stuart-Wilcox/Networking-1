const listCompanies = require('../methods/listCompanies');
const listBuyOrders = require('../methods/listBuyOrders');
const listSellOrders = require('../methods/listSellOrders');
const register = require('../methods/register');
const unRegister = require('../methods/unRegister');
const buyOrder = require('../methods/buyOrder');
const sellOrder = require('../methods/sellOrder');

module.exports = (req, res) => {
  methods = [listCompanies, listBuyOrders, listSellOrders, register, unRegister, buyOrder, sellOrder];

  for(let i = 0; i < methods.length; i++) {
    if(req.type == methods[i].type) {
      methods[i].handle(req, res);
    }
  }


  // switch(req.type){
  //   case 'REGISTER': {
  //     register(req, res);
  //     break;
  //   }
  //   case 'UNREGISTER': {
  //     unRegister(req, res);
  //     break;
  //   }
  //   case 'LISTCOMPANIES': {
  //     listCompanies.handle(req, res);
  //     break;
  //   }
  //   case 'LISTBUYORDERS': {
  //     listBuyOrder.handle(req, res);
  //   }
  //   case 'LISTSELLORDERS': {
  //     listSellOrder(req, res);
  //   }
  //   case 'BUYORDER': {
  //     buyOrder(req, res);
  //   }
  //   case 'SELLORDER': {
  //     sellOrder(req, res);
  //   }
  //   default: {
  //     throw Error('Request type not understood');
  //   }
  // }
};
