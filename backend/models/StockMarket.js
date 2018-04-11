/**
* Interface for abstracting RealtimeData
* @class StockMarket
* @see RealtimeData
* @export
*/
class StockMarket{
	/**
	*@constructor
	*/
	constructor() {
		this.displays = [];
	}

	/**
	*@param {Display} display A Display object to register
	*/
	register(display) {
		this.displays.push(display);
	}

	/**
	*@param {Number} id The id of the display to unregister (integer)
	*/
	unRegister(id) {
		for(let i = 0; i < this.displays.length; i++) {
			if (this.displays[i].id == id) {
				this.displays.splice(i, 1);
				return;
			}
		}
	}
	notify() {
		// console.log('NOTIFY');
		for(let i = 0; i < this.displays.length; i++) {
			this.displays[i].update(this);
		}
	}
}

module.exports = StockMarket;
