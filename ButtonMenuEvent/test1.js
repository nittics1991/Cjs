

class Event
{
	constructor() {
		this.publishers = [];
		this.listeners = [];
	}
	
	/**
	*	登録
	*
	*	@param object publisher
	*	@param string methodName
	*	@param function callback
	*	@return this
	**/
	attach(publisher, methodName, callback) {
		this._checkArgs(publisher, methodName, callback);
		
		let index = this._eventLocation(publisher, methodName);
		
		if (!index) {
			index = this.publishers.push({
				obj:publisher,
				method:methodName
			});
			index--;
			
			if (!Array.isArray(this.listeners[index])) {
				this.listeners[index] = [];
			}
		}
		this.listeners[index].push(callback);
		
		
		console.log(this.listeners);
		
		
		return this;
	}
	
	/**
	*	削除
	*
	*	@param object publisher
	*	@param string methodName
	*	@param function callback
	*	@return this
	**/
	detach(publisher, methodName, callback) {
		this._checkArgs(publisher, methodName, callback);
		
		let index = this._eventLocation(publisher, methodName);
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
		
		
		
		console.log(this.listeners);
		
		
		return this;
	}
	
	_checkArgs(publisher, methodName, callback) {
		if (typeof publisher !== 'object') {
			throw 'reqired type object';
		}
		
		if (typeof methodName !== 'string') {
			throw 'reqired type string';
		}
		
		if (typeof callback !== 'function') {
			throw 'reqired type function';
		}
	}
	
	_eventLocation(publisher, methodName) {
		let index = null;
		
		this.publishers.some(function(pub,i) {
			if (pub.obj !== publisher || pub.method !== methodName) {
				return false;
			}
			index = i;
			return true;
		});
		return index;
	}
	
	
	
	
	
}








