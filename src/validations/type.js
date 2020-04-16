/* eslint-disable no-prototype-builtins */
export const isNumber = data => {
  if (Number(data) !== data && data !== undefined) {
    return false;
  }

  return true;
};
