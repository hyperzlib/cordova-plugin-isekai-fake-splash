/* global cordova */
var exec = require('cordova/exec');

IsekaiFakeSplash = {
  hide: function() {
    exec(null, null, "IsekaiFakeSplash", "hide", []);
  }
};

module.exports = IsekaiFakeSplash;