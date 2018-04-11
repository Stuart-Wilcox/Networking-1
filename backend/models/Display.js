/**
* Data type to represent a display. Displays are client's listeners which receive
* notifications about new buy and sell orders
* @class Display
* @export
*/
class Display {
  /**
  *@constructor
  *@param id The id of the connection. Used for unregistering
  *@param address The IP address of the display
  *@param port The notification port
  */
  constructor(id, address, port) {
    this.address = address;
    this.port = port;
    this.id = id;
  }

  /**
  * Sends realtime data back to client on notification port
  */
  update() {
    // TODO make the connection and send stuff here
  }
 }

 module.exports = Display;
