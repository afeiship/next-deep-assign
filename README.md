# next-deep-assign
> Deep assign for next.

## installation
```bash
npm install -S afeiship/next-deep-assign --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-deep-assign';

const obj1 = {
  lineHeight: 26,
  left: 'center',
  style: {
    items: ['a'],
    fontSize: 24,
    fill: '#333',
    fontWeight: 500
  }
};

const obj2 = {
  lineHeight: 100,
  left: null,
  style: {
    items: [1, 2, 3],
    fontFamily: 'Arial'
  }
};

const result = nx.deepAssign(obj1, obj2);

// result
{
  lineHeight: 100,
  left: null,
  style: {
    items: [1, 2, 3],
    fontSize: 24,
    fill: '#333',
    fontWeight: 500,
    fontFamily: 'Arial'
  }
}
```

## resources
- https://github.com/sindresorhus/deep-assign/blob/master/index.js
