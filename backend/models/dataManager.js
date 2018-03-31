const RealtimeData = require('./RealtimeData');

/**
*Singleton class used for managing the available RealtimeData object across the application
*@class Manager
*/
class Manager {
  /**
  *@constructor
  */
  constructor() {

  }

  /**
  *@return {RealtimeData} The single instance of RealtimeData
  */
  static getRealtimeData() {
    if (!Manager.realtimeData) {
      Manager.realtimeData = new RealtimeData();
    }
    return Manager.realtimeData;
  }
}

module.exports = Manager;
