'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

console.log(user);

user.premium = 'false';
user.mood = 'happy';
user.hobby = 'skydiving';

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
  console.log(`key:${key}, value: ${user[key]}`);
}
console.log(user);
