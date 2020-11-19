# next-deep-assign
> Deep assign for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-deep-assign
```

## usage
```js
import '@feizheng/next-deep-assign';

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

## license
Code released under [the MIT license](https://github.com/afeiship/next-deep-assign/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-deep-assign
[version-url]: https://npmjs.org/package/@jswork/next-deep-assign

[license-image]: https://img.shields.io/npm/l/@jswork/next-deep-assign
[license-url]: https://github.com/afeiship/next-deep-assign/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-deep-assign
[size-url]: https://github.com/afeiship/next-deep-assign/blob/master/dist/next-deep-assign.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-deep-assign
[download-url]: https://www.npmjs.com/package/@jswork/next-deep-assign
