var nx = require('next-js-core2');
require('../src/next-deep-assign');

var obj1 = {
  lineHeight: 26,
  left: 'center',
  style: {
    items: ['a'],
    fontSize: 24,
    fill: '#333',
    fontWeight: 500
  }
};
var obj2 = {
  lineHeight: 100,
  left: '30%',
  right: '40%',
  style: {
    items: [1, 2, 3],
    fontFamily: 'Arial'
  }
};

var result = nx.deepAssign(obj1, obj2);

console.log('rs:->', result);
