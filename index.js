//Objects syntax
const obj = {
  key: "value",
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

//Nested objects
const address = {
  street: {
    line1: "11 Broadway",
    line2: "2nd Floor",
  },
  city: "New York",
  state: "NY",
  zipCode: "10004",
};
console.log(address.street.line2);

//Multiple properties can have the same value:
const meals = {
  breakfast: "Avocado toast",
  lunch: "Avocado toast",
  dinner: "Avocado toast",
};
console.log(meals.breakfast);

//But keys must be unique. If the same key is used for multiple properties, only the final value will be retained. The rest will be overwritten:
const meal = {
  breakfast: "Avocado toast",
  breakfast: "Bread",
  breakfast: "Scrambled eggs",
};
console.log(meal.breakfast);

//JS Object Methods
//Object.keys() returns top level keys of the object
console.log(Object.keys(meals));

//Object.values() returns all the top level values of the object
console.log(Object.values(address));
