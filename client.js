const Ch7al = require('./ch7al')

const dh = new Ch7al( 99.45, 'dh' )
const rial = new Ch7al( 1, 'rial' )
const centime = new Ch7al( 5, 'centime' )

console.log(`
  - 1 Dh = ${dh.to('rial')} rials = ${dh.to('centime')} centimes
  - 1 rials = ${rial.to('centime')} centimes = ${rial.to('dh')} Dh
  - 5 centimes = ${centime.to('rial')} rials = ${centime.to('dh')} Dh
`)
