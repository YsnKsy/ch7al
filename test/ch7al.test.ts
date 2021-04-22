import ch7al from '../src';

describe("ch7al(5, 'centime')", () => {
  const mad = ch7al(5, 'centime');
  it('toCentime() === 5 centimes', () => expect(mad.toCentime()).toEqual(5));
  it('toRial() == 1 rial', () => expect(mad.toRial()).toEqual(1));
  it('toDirham() == 0.05 dirham', () => expect(mad.toDirham()).toEqual(0.05));
});

describe("ch7al(0, 'centime')", () => {
  const mad = ch7al(0, 'centime');
  it('toCentime() === 0 centimes', () => expect(mad.toCentime()).toEqual(0));
  it('toRial() == 0 rial', () => expect(mad.toRial()).toEqual(0));
  it('toDirham() == 0 dirham', () => expect(mad.toDirham()).toEqual(0));
});

describe("ch7al(1, 'rial')", () => {
  const mad = ch7al(1, 'rial');
  it('toCentime() === 5 centimes', () => expect(mad.toCentime()).toEqual(5));
  it('toRial() == 1 rial', () => expect(mad.toRial()).toEqual(1));
  it('toDirham() == 0.05 dirham', () => expect(mad.toDirham()).toEqual(0.05));
});

describe("ch7al(0, 'rial')", () => {
  const mad = ch7al(0, 'rial');
  it('toCentime() === 0 centimes', () => expect(mad.toCentime()).toEqual(0));
  it('toRial() == 0 rial', () => expect(mad.toRial()).toEqual(0));
  it('toDirham() == 0 dirham', () => expect(mad.toDirham()).toEqual(0));
});

describe("ch7al(1, 'dirham')", () => {
  const mad = ch7al(1, 'dirham');
  it('toCentime() === 100 centimes', () =>
    expect(mad.toCentime()).toEqual(100));
  it('toRial() == 20 rials', () => expect(mad.toRial()).toEqual(20));
  it('toDirham() == 1 dirham', () => expect(mad.toDirham()).toEqual(1));
});

describe("ch7al(0, 'dirham')", () => {
  const mad = ch7al(0, 'dirham');
  it('toCentime() === 0 centimes', () => expect(mad.toCentime()).toEqual(0));
  it('toRial() == 0 rial', () => expect(mad.toRial()).toEqual(0));
  it('toDirham() == 0 dirham', () => expect(mad.toDirham()).toEqual(0));
});
