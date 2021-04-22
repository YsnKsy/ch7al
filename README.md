# ch7al [ CommonJS, UMD, and ES Module ]

[![Build Status](https://travis-ci.org/YsnKsy/ch7al.svg?branch=master)](https://travis-ci.org/YsnKsy/ch7al)
[![Coverage Status](https://coveralls.io/repos/YsnKsy/ch7al/badge.svg?branch=master)](https://coveralls.io/r/YsnKsy/ch7al?branch=master)

ch7al is released under the [MIT license](https://raw.githubusercontent.com/YsnKsy/ch7al/master/LICENSE.md)

## Description

Moroccan Local Currency Converter, convert Dirham to Centime or Rial.

## Installation

```shell
$ npm i --save ch7al
```
***or***

```shell
$ yarn add ch7al
```

## Example 1

```js

import ch7al from '../src'

const mad = ch7al(1, 'dirham')
/* or
  const mad = ch7al(100, 'centime')
  const mad = ch7al(20, 'rial')
*/

console.log(`
  - ${mad.toDirham()} Dh = ${mad.toRial()} rial = ${mad.toCentime()} centime
`)

/*
- 1 Dh = 20 rials = 100 centimes
*/
```

## Example 2

```js

import { toCentime, toRial, toDirham } from '../src'

const dhToCentime = toCentime(1, 'dirham')
const dhToRial = toRial(2, 'dirham')
const rialToCentime = toCentime(100, 'rial')
const centimeToDh = toDirham(1000000, 'centime')

console.log(`
  - 1 Dh = ${dhToCentime} centime
  - 2 Dh = ${dhToRial} rial
  - 100 rial = ${rialToCentime} centime
  - 1 000 000 centime = ${centimeToDh} Dh
`)

/*
- 1 Dh = 100 centimes
- 2 Dh = 40 rial
- 100 rial = 500 centime
- 1 000 000 centime = 10000 Dh
*/
```
