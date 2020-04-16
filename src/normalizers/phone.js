import { onlyNumbers } from '../utils';

export const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}`;
  }

  if (numbers.length <= 11 || numbers.length > 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }
};
