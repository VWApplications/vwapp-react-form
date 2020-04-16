import { validate as isValidCnpj } from 'node-cnpj';
import { validate as isValidCpf } from 'node-cpf';

export const validateCpf = value => {
  if (!value) {
    return false;
  }

  const digits = value.replace(/[^\d]/g, '');

  if (digits.length !== 11) {
    return false;
  } else if (!isValidCpf(digits)) {
    return false;
  }

  return true;
};

export const validateCnpj = value => {
  if (!value) {
    return false;
  }

  const digits = value.replace(/[^\d]/g, '');

  if (digits.length < 14 || digits.length > 15) {
    return false;
  } else if (!isValidCnpj(digits)) {
    return false;
  }

  return true;
};
