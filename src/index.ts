type Currency = 'centime' | 'rial' | 'dirham';

interface Ch7al {
  toCentime(): number;
  toRial(): number;
  toDirham(): number;
}

export function toCentime(value: number, from: Currency): number {
  if (value === 0) return value;
  switch (from) {
    case 'rial':
      return value * 5;
    case 'dirham':
      return value * 100;
    default:
      return value;
  }
}

export function toRial(value: number, from: Currency): number {
  if (value === 0) return value;
  switch (from) {
    case 'centime':
      return value / 5;
    case 'dirham':
      return toCentime(value, 'dirham') / 5;
    default:
      return value;
  }
}

export function toDirham(value: number, from: Currency): number {
  if (value === 0) return value;
  switch (from) {
    case 'centime':
      return value / 100;
    case 'rial':
      return toCentime(value, 'rial') / 100;
    default:
      return value;
  }
}

export default function(value: number, from: Currency): Ch7al {
  return {
    toCentime: () => toCentime(value, from),
    toRial: () => toRial(value, from),
    toDirham: () => toDirham(value, from),
  };
}
