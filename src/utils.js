export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

export function formatWithLeftZero(number) {
  return number < 10 ? `0${number}` : number;
}

export function moveToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
