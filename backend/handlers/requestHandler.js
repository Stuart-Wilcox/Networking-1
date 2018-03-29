const listCompanies = require('../methods/listCompanies');

module.exports = (req, res) => {
  switch(req.type){
    case 'REGISTER': {

      break;
    }
    case 'UNREGISTER': {
      // TODO: unregister the display here
      break;
    }
    case 'LISTCOMPANIES': {
      listCompanies(req, res);
      break;
    }
    default: {
      throw Error('Request type not understood');
    }
  }
};
