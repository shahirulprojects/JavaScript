//ACCESSING,ADDING AND UPDATING PROPERTIES OF AN OBJECT
//use dot notation or square bracket notation
//dot notation is used to retrieve some values from an object

//1.DOT NOTATION
//Access
const person={
    firstName:"Shahirul",
    age:21,
    "makanan kegemaran":"Ayam goreng Korea"
}
console.log(person.firstName); //dot notation

//Add 
person.cat={name:"Sophea",age:2}; //add cat Object inside the person Object
console.log(person); //akan print maklumat terkini tentang object person tu termasuk the newly added cat object
console.log(person.cat.name);//untuk access specific value of an object that is in another object (object cat ada dalam object person so kena buat camni)

//Update
person.firstName="Ikmal"; //akan update nama dari "Shahirul" to "Ikmal"
console.log(person.firstName);


//2.SQUARE BRACKET NOTATION
//Access
console.log(person["firstName"]);

//To access properties dynamically 
const property="age";
console.log(person[property]);//kalau buat console.log(person.property) dia akan dapat undefined sebab dot notation akan cari properties yang nama "property" dalam object.Tu yang dapat undefined sebab "property" tak wujud dalam Object person tu

//Square bracket boleh access key yang di declare macam string (in this case,"makanan kegemaran")
console.log(person["makanan kegemaran"]); //kalau dot notation takleh buat benda ni 

//Add
person.car={name:"GTR R35",colour:"Matte Black"}; //add car Object inside the person Object
console.log(person);
console.log(person["car"]);

//Update
person.firstName="Shahirul"; //akan update nama dari "Ikmal" to "Shahirul"
console.log(person["firstName"]);




