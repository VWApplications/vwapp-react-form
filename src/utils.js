export const toString = (list = [], join = " ") => {
  let string = "";
  list.map((item, index) => {
    if (index === 0) {
      string += `${item}`;
    } else {
      if (item) {
        string += `${join}${item}`;
      } else {
        string += `${item}`;
      }
    }
  });

  return string;
};
