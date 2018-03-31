const realtimeData = require('../models/dataManager').getRealtimeData();
const Display = require('../models/Display');

module.exports = {
  type: 'REGISTER',
  handle(req, res) {

    realtimeData.register(
      new Display(
        req.headers.get('ID'),
        req.headers.get('RemoteAddress'),
        req.headers.get('Notification Port')
      )
    );
  },
}
