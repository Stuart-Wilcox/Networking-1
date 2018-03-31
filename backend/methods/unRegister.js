const realtimeData = require('../models/dataManager').getRealtimeData();

module.exports = {
  type: 'UNREGISTER',
  handle(req, res) {
    realtimeData.unRegister(req.headers.get('id'));
  },
}
