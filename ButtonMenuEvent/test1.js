

class Event
{
	constructor() {
		this.publishers = [];
		this.listeners = [];
		this.stop = false;
	}
	
	/**
	*	登録
	*
	*	@param object publisher
	*	@param string eventName
	*	@param function callback(this, ...context)
	*	@return this
	**/
	attach(publisher, eventName, callback) {
		this._checkArgs(publisher, eventName, callback);
		
		let index = this._eventLocation(publisher, eventName);
		
		if (!index) {
			index = this.publishers.push({
				obj:publisher,
				method:eventName
			});
			index--;
			
			if (!Array.isArray(this.listeners[index])) {
				this.listeners[index] = [];
			}
		}
		this.listeners[index].push(callback);
		return this;
	}
	
	/**
	*	削除
	*
	*	@param object publisher
	*	@param string eventName
	*	@param function callback
	*	@return this
	**/
	detach(publisher, eventName, callback) {
		this._checkArgs(publisher, eventName, callback);
		
		let index = this._eventLocation(publisher, eventName);
		let _publishers = this.publishers;
		let _listeners = this.listeners;
		
		
		if (typeof index === 'number') {
			this.listeners[index].some(function(obj, i) {
				if (obj === callback) {
					_listeners.splice(i, 1);
					return true;
				}
				return false;
			});
		}
		return this;
	}
	
	/**
	*	発行
	*	
	*	@param object publisher
	*	@param string eventName
	*	@param mixed context
	*	@return array
	**/
	fire(publisher, eventName, context = []) {
		if (typeof publisher !== 'object') {
			throw 'reqired type object';
		}
		
		if (typeof eventName !== 'string') {
			throw 'reqired type string';
		}
		
		let args = [publisher];
		if (!Array.isArray(context)) {
			args.push(context);
		} else {
			args.concat(context);
		}
		
		let index = this._eventLocation(publisher, eventName);
		
		if (index === null) {
			return [];
		}
		
		let results = [];
		
		this.stop = false;
		
		for (let listener of this.listeners[index]) {
			results.push(listener.apply(null, args));
			
			if (this.stop) {
				break;
			}
		}
		return results;
	}
	
	/**
	*	停止
	*
	*	@return this
	**/
	stopEvent() {
		this.stop = true;
		return this;
	}
	
	_checkArgs(publisher, eventName, callback) {
		if (typeof publisher !== 'object') {
			throw 'reqired type object';
		}
		
		if (typeof eventName !== 'string') {
			throw 'reqired type string';
		}
		
		if (typeof callback !== 'function') {
			throw 'reqired type function';
		}
	}
	
	_eventLocation(publisher, eventName) {
		let index = null;
		
		this.publishers.some(function(pub,i) {
			if (pub.obj !== publisher || pub.method !== eventName) {
				return false;
			}
			index = i;
			return true;
		});
		return index;
	}
}
