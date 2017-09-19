'use strict';
/*
const Ch7al = require('./ch7al.js');
let ch7al = new Ch7al(100);
console.log( ch7al.koulchi() );
 */

class Ch7al {

  constructor ( value ) {
    this.name = 'Ch7al';
    this.value = ( value ) ? value : false
    this.centime = 1;
    this.rial = this.centime * 5;
    this.dh = this.centime * 100;
  }

  centime2Rial ( n ) {
    return ( this.centime / this.rial ) * n;
  }

  centime2Dh ( n ) {
    return ( this.centime / this.dh ) * n;
  }

  rial2Centime ( n ) {
    return ( this.rial / this.centime ) * n;
  }

  rial2Dh ( n ) {
    return ( this.rial / this.dh ) * n;
  }

  dh2Centime ( n ) {
    return ( this.dh / this.centime ) * n;
  }

  dh2Rial ( n ) {
    return ( this.dh / this.rial ) * n;
  }

  koulchi () {
    let result = this.value;
    if ( this.value ) {
      result = {
        dh: {
          centime: this.dh2Centime(this.value),
          rial: this.dh2Rial(this.value)
        },
        rial: {
          centime: this.rial2Centime(this.value),
          dh: this.rial2Dh(this.value)
        },
        centime: {
            rial: this.centime2Rial(this.value),
            dh: this.centime2Dh(this.value)
        }
      };
    }
    return result
  }
}

module.exports = Ch7al;
