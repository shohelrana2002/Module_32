const arr = [
  {
    name: "Shohel Rana",
    slary: 100,
  },
  {
    name: "Shohel Rana",
    slary: 100,
  },
  {
    name: "Shohel Rana",
    slary: 100,
  },
  {
    name: "Shohel Rana",
    slary: 100,
  },
  {
    name: "Shohel Rana",
    slary: 100,
  },
  {
    name: "Shohel Rana",
    slary: 0,
  },
];

const total = arr.reduce(function (curr, prev) {
  return curr + prev.slary;
}, 0);

console.log(total);
