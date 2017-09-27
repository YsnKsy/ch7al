const assert = require('assert')
const Ch7al = require('../ch7al')
const chai = require('chai')
//const assert = chai.assert;    // Using Assert style
const expect = chai.expect    // Using Expect style
const should = chai.should()

describe("new Ch7al(1,'dirham')", () => {
  const dh = new Ch7al({ value: 1, currency: 'dh' })

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

describe("new Ch7al(1,'rial')", () => {
  const rial = new Ch7al({ value: 1,  currency: 'rial' })

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

describe("new Ch7al(5,'centimes')", () => {
  const centime = new Ch7al({ value:5, currency: 'centimes'})

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

describe("new Ch7al()", () => {
  it('should throw error', () => {
    expect(() => new Ch7al()).to.throw(Error)
  })
})

describe("new Ch7al({})", () => {
  it('should throw error', () => {
    expect(() => new Ch7al({})).to.throw(Error)
  })
})

describe("new Ch7al({ value: 1, currency: 'dirhems'})", () => {
  it('should throw error', () => {
    expect(() => new Ch7al({ value: 1 })).to.throw(Error)
  })
})

describe("new Ch7al({ value: 0, currency: 'dh' })", () => {
  const params = { value: 0, currency: 'dh' }
  it('should throw error', () => {
    expect(() => new Ch7al(params)).to.throw(Error)
  })
})

describe("new Ch7al(1,'dirham')", () => {
  const dh = new Ch7al({ value: 1, currency: 'dh' })
  describe("#to()", () => {
    it('should throw error', () => {
      expect(() => dh.to()).to.throw(Error)
    })
  })
})
