import { onlyNumbers } from '../utils';

export const normalizeCPF = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 3) {
    return numbers;
  }

  if (numbers.length <= 6) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}`;
  }

  if (numbers.length <= 9) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}`;
  }

  if (numbers.length <= 11 || numbers.length > 11) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  }
};

export const normalizeCNPJ = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 5) {
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}`;
  }

  if (numbers.length <= 8) {
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}`;
  }

  if (numbers.length <= 12) {
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}`;
  }

  if (numbers.length <= 14 || numbers.length > 14) {
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`;
  }
};
