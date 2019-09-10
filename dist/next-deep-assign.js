/*!
 * name: next-deep-assign
 * url: https://github.com/afeiship/next-deep-assign
 * version: 1.0.0
 * date: 2019-09-10T14:37:49.708Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var ARRAY_TYPE = '[object Array]';
  var OBJECT = 'object';
  var toString = Object.prototype.toString;

  function assign(inTarget, inSrc) {
    nx.forIn(inSrc, function(key, value) {
      if (value == null) {
        inTarget[key] = value;
      } else {
        if (typeof value === OBJECT) {
          if (toString.call(value) === ARRAY_TYPE) {
            inTarget[key] = value;
          } else {
            inTarget[key] = inTarget[key] || {};
            assign(inTarget[key], value);
          }
        } else {
          inTarget[key] = value;
        }
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
