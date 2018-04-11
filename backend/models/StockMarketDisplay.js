/**
* Abstract a client's listener for incoming data
* @class StockMarketDisplay
* @export
*/
class StockMarketDisplay {
  /**
  * @constructor
  * @param {String} address The IPv4 or IPv6 address of the client to connect to
  * @param {Number} notificationPort The port on which the client is listening
  */
  constructor(address, notificationPort) {
    this.address = address;
    this.notificationPort = notificationPort;
  }

  /**
  * Send realtime data to the client listener
  * @param {RealtimeData} realtimeData The realtimeData to send to the client
  * @todo implement
  */
  update(realtimeData) {
    // console.log('UPDATE');
  }
}

module.exports = StockMarketDisplay;
