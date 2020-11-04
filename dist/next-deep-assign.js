/*!
 * name: @feizheng/next-deep-assign
 * description: Deep assign for next.
 * homepage: https://github.com/afeiship/next-deep-assign
 * version: 1.2.2
 * date: 2020-11-04T01:47:06.837Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var isPlainObject = nx.isPlainObject || require('@feizheng/next-is-plain-object');
  var OBJECT_UNDEF = '[object Undefined]';
  var toString = Object.prototype.toString;

  function assign(inTarget, inSrc) {
    nx.forIn(inSrc, function (key, value) {
      var type = toString.call(value);
      switch (true) {
        case isPlainObject(value):
          inTarget[key] = inTarget[key] || {};
          assign(inTarget[key], value);
          break;
        case type === OBJECT_UNDEF:
          break;
        default:
          inTarget[key] = value;
          break;
      }
    });
  }

  nx.deepAssign = function (inTarget) {
    var args = nx.slice(arguments, 1);
    var target = inTarget || {};
    args.forEach(function (arg) {
      assign(target, arg);
    });
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deepAssign;
  }
})();

//# sourceMappingURL=next-deep-assign.js.map
