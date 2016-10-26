var Dispatcher = require('../dispatcher/AppDispatcher'),
    keyMirror = require('keymirror');


/**
 * `Actions` are generated by `Views` and processed by the `Dispacher` according to the
 * Flux application architecture.
 *
 */
var Actions = {

  TYPES: keyMirror({
    SET: null,
    ADD: null,
  }),

  set: function(val) {
    Dispatcher.handleViewAction({
      type: Actions.TYPES.SET,
      value: val
    });
  },

  add: function(n) {
    Dispatcher.handleViewAction({
      type: Actions.TYPES.ADD,
      n: n
    });
  }
};

/**
 * Expose `Actions`
 */

exports = module.exports = Actions;
