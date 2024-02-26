const array = [10, 30, 20, 50, 60, 40, 80, 90, 70];
const sum = array.reduce(function (current, previus) {
  return current + previus;
}, 0);

console.log(sum);
