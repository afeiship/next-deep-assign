(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var OBJECT_TYPE = '[object Object]';
  var OBJECT = 'object';
  var toString = Object.prototype.toString;

  function assign(inTarget, inSrc) {
    nx.forIn(inSrc, function(key, value) {
      var type = toString.call(value);
      switch (type) {
        case OBJECT_TYPE:
          inTarget[key] = inTarget[key] || {};
          assign(inTarget[key], value);
          break;
        default:
          inTarget[key] = value;
          break;
      }
    });
  }

  nx.deepAssign = function(inTarget) {
    var args = nx.slice(arguments, 1);
    var target = inTarget || {};
    args.forEach(function(arg) {
      assign(target, arg);
    });
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deepAssign;
  }
})();
