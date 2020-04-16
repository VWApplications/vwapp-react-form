import { onlyNumbers } from '../utils';

export const normalizeDate = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
  }

  if (numbers.length <= 8 || numbers.length > 8) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
  }
};

export const normalizeTime = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 4 || numbers.length > 4) {
    return `${numbers.slice(0, 2)}:${numbers.slice(2, 4)}`;
  }
};

export const normalizeDatetime = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
  }

  if (numbers.length <= 8) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
  }

  if (numbers.length <= 10) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)} ${numbers.slice(8, 10)}`;
  }

  if (numbers.length <= 12 || numbers.length > 12) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)} ${numbers.slice(8, 10)}:${numbers.slice(10, 12)}`;
  }
};
