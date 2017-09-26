# ch7al v1.0.5

ch7al is released under the [MIT license](https://raw.githubusercontent.com/YsnKsy/ch7al/master/LICENSE.md)

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
