// const person = {
//   name: "Andrew",
//   age: 26,
//   location: {
//     city: "Bangalore",
//     temp: 92
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// // const age = person.age;

// console.log(`${firstName} is ${age} years old!`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) console.log(`Its ${temperature} in ${city}`);

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "1294"
];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);
