var assign = require('object-assign'),
    EventEmitter = require('events').EventEmitter,

var _value = 'react';
var _count = 0;

var Store = assign({}, EventEmitter.prototype, {
  get: function() {
    return {
      value: _value,
      count: _count
    }
  }
});

exports = module.exports = Store;
