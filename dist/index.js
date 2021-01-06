/*!
 * name: @jswork/next-deep-assign
 * description: Deep assign for next.
 * homepage: https://github.com/afeiship/next-deep-assign
 * version: 1.0.1
 * date: 2021-01-06 21:48:35
 * license: MIT
 */

(function () {
  var global = global || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var isPlainObject = nx.isPlainObject || require('@jswork/next-is-plain-object');
  var OBJECT_UNDEF = '[object Undefined]';
  var toString = Object.prototype.toString;

  // https://github.com/jonschlinkert/is-plain-object

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
