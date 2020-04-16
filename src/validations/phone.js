export const validatePhone = phone => {
  if (!phone) {
    return false;
  }

  const digits = phone.replace(/[^\d]/g, '');
  if (digits.length === 11 || digits.length === 12) {
    return true;
  }

  return false;
};
