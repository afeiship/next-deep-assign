const nx = require('@feizheng/next-js-core2');
const ProxyAgent = require('proxy-agent');
const isPlainObject = global.isPlainObject || require('is-plain-object');

require('../src/next-deep-assign');

describe('api.basic test', () => {
  test('assign object - when undefined will do nothing', function () {
    var obj1 = { name: 'fei' };
    var obj2 = { email: '1290657123@qq.com', name: undefined };

    var result = nx.deepAssign(obj1, obj2);

    expect(result).toEqual({
      name: 'fei',
      email: '1290657123@qq.com'
    });
  });

  test('assign object - when null will override', function () {
    var obj1 = { name: 'fei' };
    var obj2 = { email: '1290657123@qq.com', name: null };

    var result = nx.deepAssign(obj1, obj2);

    expect(result).toEqual({
      name: null,
      email: '1290657123@qq.com'
    });
  });

  test('assign object - level1', function () {
    var obj1 = { name: 'fei' };
    var obj2 = { email: '1290657123@qq.com' };

    var result = nx.deepAssign(obj1, obj2);

    expect(result).toEqual({
      name: 'fei',
      email: '1290657123@qq.com'
    });
  });

  test('assign object - level2', function () {
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


  test('proxy agent will not deep mixed', () => {
    var options = {
      method: 'post', body: { zx: 1 },
      headers: {
        token: 'SFsNnLAnFHAWeuUXKtY04IWLcyxXOKl4hwm96kqyCss_'
      }
    };
    var agent = new ProxyAgent('http://37.232.125.90:8080');
    var config = nx.deepAssign(options, { headers: { ua: 'xxx' }, agent });

    expect(
      isPlainObject(config.agent)
    ).toBe(false)
  });


});
