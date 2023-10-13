function personInfo(person) {
  const { name, age, email, city } = person;
  const fullName = `${name}, ${age}`;
  const contact = `${email}, ${city}`;
  return { fullName, contact };
}

const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  city: "New York",
};

const info = personInfo(person);
console.log(info.fullName); // "John Doe, 30"
console.log(info.contact); // "john.doe@example.com, New York"
