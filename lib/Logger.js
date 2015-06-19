var color = require('colors');
var logLevel = 3;

exports.debug = function(what) {if(logLevel >= 4) console.log("[DEBUG]   "+what.green); }
exports.info  = function(what) {if(logLevel >= 3) console.log("[INFO]    "+what.blue); }
exports.warning  = function(what) {if(logLevel >= 2) console.log("[WARNING] "+what.yellow); }
exports.error = function(what) {if(logLevel >= 1) console.log("[ERROR]   "+what.trap); }
exports.critical  = function(what) {if(logLevel >= 1) console.log("[CRITICAL]"+what.red); }

