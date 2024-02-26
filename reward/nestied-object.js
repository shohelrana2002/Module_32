const person = {
  name: "shohel",
  age: 32,
  address: {
    city: "dhaka",
    label: "200 bai north",
    sector: {
      Number: 15,
    },
  },
};

// console.log(person.address.label);
console.log(person["address"]["sector"]["Number"]);
