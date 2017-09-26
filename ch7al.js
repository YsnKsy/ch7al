'use strict';

const includes = require('lodash/includes')

class Ch7al {

  constructor ( value, currency ) {
    this.name = 'Ch7al'

    this.centime = 1
    this.rial = this.centime * 5
    this.dh = this.centime * 100
    this.centimeTags = ['centimes', 'centime', 'santims', 'santims']
    this.rialTags = ['rials', 'riels', 'ryals', 'ryels', 'rial', 'riel', 'ryal', 'ryel']
    this.dhTags = ['dirham', 'dirhem', 'dh', 'mad']

    if ( (value && value >= 0)  && currency &&
      ( includes(this.centimeTags, currency.toLocaleLowerCase()) ||
        includes(this.rialTags, currency.toLocaleLowerCase()) ||
        includes(this.dhTags, currency.toLocaleLowerCase()) ) ) {
      this.value = value
      this.fromCurrency = currency.toLocaleLowerCase()

    } else {

      if( !value && value < 0 )
        throw new ReferenceError("Please define a valid value > 0")

      if( !currency )
        throw new ReferenceError("Please define a moroccan subcurrency ( Dh, Rial, Centime )")
    }
  }

  to ( currency ) {
    let result = 0

    if (currency) {
      // To centime
      if ( includes( this.centimeTags, currency.toLocaleLowerCase() ) ) {
         if ( includes( this.centimeTags, this.fromCurrency ) ) result = this.value
         if ( includes( this.rialTags, this.fromCurrency ) ) result = ( this.rial / this.centime ) * this.value
         if ( includes( this.dhTags, this.fromCurrency ) ) result = ( this.dh / this.centime ) * this.value
       }

       // To rial
       if ( includes( this.rialTags, currency.toLocaleLowerCase() ) ) {
         if ( includes( this.centimeTags, this.fromCurrency ) ) result = ( this.centime / this.rial ) * this.value
         if ( includes( this.rialTags, this.fromCurrency ) ) result = this.value
         if ( includes( this.dhTags, this.fromCurrency ) ) result = ( this.dh / this.rial ) * this.value
       }

       // To Dh
       if ( includes( this.dhTags, currency.toLocaleLowerCase() ) ) {
         if ( includes( this.centimeTags, this.fromCurrency ) ) result = ( ( this.centime / this.dh ) * this.value ).toFixed(2)
         if ( includes( this.rialTags, this.fromCurrency ) ) result = ( ( this.rial / this.dh ) * this.value ).toFixed(2)
         if ( includes( this.dhTags, this.fromCurrency ) ) result = this.value.toFixed(2)
       }

    } else {
      throw new ReferenceError("Please define a moroccan subcurrency ( Dh, Rial, Centime )")
    }

    return result
  }

}

module.exports = Ch7al;
