var nx = require('next-js-core2');
require('../src/next-deep-assign');

describe('api test', () => {
  test('assign object - level1', function() {
    var obj1 = { name: 'fei' };
    var obj2 = { email: '1290657123@qq.com' };

    var result = nx.deepAssign(obj1, obj2);

    expect(result).toEqual({
      name: 'fei',
      email: '1290657123@qq.com'
    });
  });

  test('assign object - level2', function() {
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
      left: null,
      style: {
        items: [1, 2, 3],
        fontFamily: 'Arial'
      }
    };

    var result = nx.deepAssign(obj1, obj2);

    expect(result).toEqual({
      lineHeight: 100,
      left: null,
      style: {
        items: [1, 2, 3],
        fontSize: 24,
        fill: '#333',
        fontWeight: 500,
        fontFamily: 'Arial'
      }
    });
  });
});
