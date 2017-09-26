const assert = require('assert')
const ch7al = require('../ch7al')

describe("new ch7al(1,'dirham')", () => {
  const dh = new ch7al( 1, 'dh' )

  describe("#to('dh')", () => {
    it('should return 1 dh', () => {
      assert.equal(1, dh.to('dh'))
    })
  })

  describe("#to('rial')", () => {
    it('should return 20 rials', () => {
      assert.equal(20, dh.to('rial'))
    })
  })

  describe("#to('centime')", () => {
    it('should return 100 centimes', () => {
      assert.equal(100, dh.to('centime'))
    })
  })
})

describe("new ch7al(1,'rial')", () => {
  const rial = new ch7al( 1, 'rial' )

  describe("#to('dh')", () => {
    it('should return 0.05 dh', () => {
      assert.equal(0.05, rial.to('dh'))
    })
  })

  describe("#to('rial')", () => {
    it('should return 1 rial', () => {
      assert.equal(1, rial.to('rial'))
    })
  })

  describe("#to('centime')", () => {
    it('should return 5 centimes', () => {
      assert.equal(5, rial.to('centime'))
    })
  })
})

describe("new ch7al(5,'centimes')", () => {
  const centime = new ch7al( 5, 'centimes' )

  describe("#to('dh')", () => {
    it('should return 0.05 dh', () => {
      assert.equal(0.05, centime.to('dh'))
    })
  })

  describe("#to('rial')", () => {
    it('should return 1 rial', () => {
      assert.equal(1, centime.to('rial'))
    })
  })

  describe("#to('centime')", () => {
    it('should return 5 centimes', () => {
      assert.equal(5, centime.to('centime'))
    })
  })
})
