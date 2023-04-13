import nx from '@jswork/next';
import isPlainObject from 'is-plain-obj';

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

export default nx.deepAssign;
