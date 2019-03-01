const chai = require('chai');
const assert = chai.assert;

// import * from '../src/MenuItem.js';
const MenuItem = require('../src/MenuItem.js');

describe('MenuIem', function() {
    if ('success construct', function() {
        const dataset = {
            name:'表示名称',
            url:'http://google.com',
        };
        const obj = new MenuItem(dataset);
        
        assert.equal(dataset.name, obj.name());
        assert.equal(dataset.url, obj.url());
    });
    
});
