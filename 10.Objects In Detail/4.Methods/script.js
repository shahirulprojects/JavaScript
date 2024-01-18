//METHODS

//1.Object.keys()
//Creates an array containing the keys of an object

const employees = {
  boss: "Shahirul",
  secretary: "Dahyun",
  sales: "Cate",
  accountant: "Emma",
};

//Lets say that we only want to  find what are the positions that the company has

const positions = Object.keys(employees); //akan create a new array containing only the keys
console.log(positions);

//2.Object.values()
//Creates an array containing the values of an object

const session = {
  id: 1,
  time: "26-July-2018",
  device: "Mobile",
  browser: "Chrome",
};

const sessionInfo = Object.values(session);
console.log(sessionInfo);

//3.Object.entries()
//Creates a nested array of the key/value pairs of an object
//To get the pair of keys and values but each pair is stored in a different array

const operatingSystem = {
  name: "Android",
  version: 18.04,
  license: "Open Source",
};

const entries = Object.entries(operatingSystem);
console.log(entries);

//Loop through the results
entries.forEach((entry) => {
  //using for Each since it is an array now
  let key = entry[0];
  let value = entry[1];

  console.log(`${key}:${value}`);
});

//4.Object.freeze()
//PREVENTS modificiation to properties and values of an object and PREVENTS properties from being added or removed from an object

const user1 = {
  username: "John",
  password: "123123",
};

const admin = Object.freeze(user1); //kita freeze kan the object so that there will be no changes to the object properties

//ni kita try override the object dengan nilai baru untuk test jadi ke freeze tu
admin.username = "Shahirul";
admin.password = "123";

console.log(admin); //the username and password will still be "John" and "123123" because the object has been frozen

//5.Object.seal()
//Extremely similar like Object.freeze() but a tiny difference
//ALLOWS modification to properties and values of an object but PREVENTS properties from being added to an object

const user2 = {
  username: "John",
  password: "123123",
};

const newUser = Object.seal(user2);

newUser.password = "test123"; //Modify the properties
newUser.gender = "Male"; //Adding new properties

console.log(newUser); //the password will change to "test123" but there will be no gender properties because the object has been sealed
