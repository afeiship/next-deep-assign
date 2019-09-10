(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var ARRAY_TYPE = '[object Array]';
  var OBJECT = 'object';
  var toString = Object.prototype.toString;

  function deepAssign(target1, target2) {}

  nx.deepAssign = function(inTarget) {
    var args = nx.slice(arguments, 1);
    var target = inTarget || {};
    args.forEach(function(arg) {
      nx.mix(target, arg);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deepAssign;
  }
})();
