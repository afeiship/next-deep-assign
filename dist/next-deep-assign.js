/*!
 * name: next-deep-assign
 * url: https://github.com/afeiship/next-deep-assign
 * version: 1.0.0
 * date: 2019-09-11T06:33:28.262Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var OBJECT_TYPE = '[object Object]';
  var OBJECT_UNDEF = '[object Undefined]';
  var toString = Object.prototype.toString;

  function assign(inTarget, inSrc) {
    nx.forIn(inSrc, function(key, value) {
      var type = toString.call(value);
      switch (type) {
        case OBJECT_TYPE:
          inTarget[key] = inTarget[key] || {};
          assign(inTarget[key], value);
          break;
        case OBJECT_UNDEF:
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

//# sourceMappingURL=next-deep-assign.js.map
