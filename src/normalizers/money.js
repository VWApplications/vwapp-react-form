import { onlyNumbers } from '../utils';

export const normalizeValue = value => {
  const numbers = onlyNumbers(value);

  if (!numbers) {
    return numbers;
  }

  if (numbers.length <= 1) {
    return 'R$ ' + numbers;
  }

  if (numbers.length <= 2) {
    return `R$ ${numbers.slice(0, 1)},${numbers.slice(1, 2)}`;
  }

  if (numbers.length <= 3) {
    return `R$ ${numbers.slice(0, 1)},${numbers.slice(1, 3)}`;
  }

  if (numbers.length > 3) {
    return `R$ ${numbers.slice(0, numbers.length - 2)},${numbers.slice(numbers.length - 2, numbers.length)}`;
  }
};
