/* 
Truthy:
1.true
2.positive ba negative is true but other then 0 false
3. any sting true
4."0" 'false"
5.{}
6.[]




Falsy:
1.false
2.0
3.""(empty string)
4.undefined
5.null
*/
const x = 5;

if (x) {
  console.log("Value Of x is Truthy");
} else {
  console.log("Value of x is Falsy");
}

// falsy cheack korar jono ko rte habe ja
const q = "";
if (!q) {
  console.log("X is A falsy");
}

// check true

const a = {};
if (!!a) {
  console.log("true Check kora hoy");
}
