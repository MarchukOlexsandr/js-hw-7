function getUserInfo(user) {
  const { name, age } = user;
  return `Мене звуть ${name} і мені ${age} років.`;
}

const user = {
  name: "John",
  age: 25,
};

const userInfo = getUserInfo(user);
console.log(userInfo); // "Мене звуть John і мені 25 років."
