const RealtimeData = require('./RealtimeData');

// basically a singleton to manage the realtime data across the application
class Manager {
  constructor() {

  }

  static getRealtimeData() {
    if (!Manager.realtimeData) {
      Manager.realtimeData = new RealtimeData();
    }
    return Manager.realtimeData;
  }
}

module.exports = Manager;
