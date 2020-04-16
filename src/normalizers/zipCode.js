import { onlyNumbers } from '../utils';

export const normalizeZipCode = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 5) {
    return numbers;
  }

  if (numbers <= 8 || numbers > 9) {
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  }
};
