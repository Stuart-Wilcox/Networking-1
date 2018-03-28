module.exports = (req, res) => {
  switch(req.type){
    case 'REGISTER': {
      // TODO: register the display here
      break;
    }
    case 'UNREGISTER': {
      // TODO: unregister the display here
      break;
    }
    case 'LISTCOMPANIES': {
      // TODO: list the companies

      res.headers.add('Data', JSON.stringify({
        companies: [
          {
            name: 'Microsoft Corp',
            symbol: 'MSFT',
          },
          {
            name: 'Apple Inc',
            symbol: 'AAPL',
          },
        ],
      }));
      break;
    }
    default: {
      throw Error('Request type not understood');
    }
  }
}
