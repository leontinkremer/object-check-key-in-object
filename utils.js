const id = Symbol("id");

const car = {
  [id]: 125,
  name: "Toyota Corolla",
  year: 2017,
  isNew: false,
};

console.log("Key 'name' in object 'car'?", "name" in car);
console.log("Key 'id' in object 'car'?", id in car);
