//’use strict';

class MenuItem {
    constructor(dataset) {
        if (! this._isObject(dataset)) {
            throw 'must be object’;
        }
        
        this._name = dataset.name || '';
        this._url = dataset.url || '';
    }
    
    _isObject(target) {
        return Object.prototype.toString.call(target) === "[object Object]";
    }
    
    name() {
        return this._name;
    }
    
    url() {
        return this._url;
    }
    
    setName(name) {
        return new MenuItem({
            name:name,
            url:this._url,
        });
    }
    
    setUrl(url) {
        return new MenuItem({
            name:this._name,
            url:url,
        });
    }
}

// export {MenuItem};
exports.MenuItem = MenuItem;

