# ch7al v1.0.8

[![Build Status](https://travis-ci.org/YsnKsy/ch7al.svg?branch=master)](https://travis-ci.org/YsnKsy/ch7al)
[![Dependency Status](https://gemnasium.com/badges/github.com/YsnKsy/ch7al.svg)](https://gemnasium.com/github.com/YsnKsy/ch7al)
[![Coverage Status](https://coveralls.io/repos/YsnKsy/ch7al/badge.svg?branch=master)](https://coveralls.io/r/YsnKsy/ch7al?branch=master)

ch7al is released under the [MIT license](https://raw.githubusercontent.com/YsnKsy/ch7al/master/LICENSE.md)

## Description

Moroccan Local Currency Converter

## Installation

```shell
$ npm i --save ch7al
```
## Example

In Node.js:
```js
const Ch7al = require('ch7al')

const dh = new Ch7al( 1, 'dh' )
const rial = new Ch7al( 1, 'rial' )
const centime = new Ch7al( 5, 'centime' )

console.log(`
  - 1 Dh = ${dh.to('rial')} rials = ${dh.to('centime')} centimes
  - 1 rials = ${rial.to('centime')} centimes = ${rial.to('dh')} Dh
  - 5 centimes = ${centime.to('rial')} rials = ${centime.to('dh')} Dh
`)

/*
- 1 Dh = 20 rials = 100 centimes
- 1 rials = 5 centimes = 0.05 Dh
- 5 centimes = 1 rials = 0.05 Dh
*/
```
