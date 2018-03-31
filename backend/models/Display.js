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

  update() {
    // TODO make the connection and send stuff here
  }
 }

 module.exports = Display;
