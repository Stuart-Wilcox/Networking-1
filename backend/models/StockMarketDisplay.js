class StockMarketDisplay {
  constructor(address, notificationPort) {
    this.address = address;
    this.notificationPort = notificationPort;
  }

  update(realtimeData) {
    console.log('UPDATE');
  }
}

module.exports = StockMarketDisplay;
