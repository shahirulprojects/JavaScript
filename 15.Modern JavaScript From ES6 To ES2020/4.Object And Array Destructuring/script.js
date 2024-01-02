//OBJECT AND ARRAY DESTRUCTURING

//1.OBJECT DESTRUCTURING

const person={
    firstName:"Kim",
    lastName:"Dahyun",
    car:{
        brand:"BMW",
        colour:"black"
    },
    animals:{
        cat:{
            name:"Sophea buncit",
            age:2,
        },

        turtle:{
            name:"Theodore",
            age:1,
        }
    }
}

//lets say that we want to print out every single properties of this object
// we can do it like this
//console.log(person.firstName)
//console.log(person.lastName)
//console.log(person.car.brand)
//and so on

//but this is not a good practice because we always repeat ourself or in other words we are writing DRY codes (Dont Repeat Yourself) 
//so how to do it without repeating ourself?
//we use object destructuring
//object destructuring allows you to take properties outside of an object

const {firstName,lastName,car:{brand,colour},animals:{cat,turtle}} = person;
//we are taking all of these properties outside of the person Object and put it in a global scope
//this way we dont have to mention person.blabla anymore since the properties are now at global scope
//yang car and animals tu dia jadi camtu sebab kita pun nak keluarkan properties dalam car and animals tu dari car and animals Object so that we also dont have to mention car.blabla and animals.blabla
//do note that animals tu kita buat cat,turtle instead of name,age sebab kalau buat name,age kita akan ada variable with the same name
//sebab kan cat pun ada name & age dia and turtle pun ada name & age dia so bila kita console.log nanti kita akan dapat undefined

console.log(firstName);
console.log(lastName);
console.log(brand);
console.log(colour);
console.log(cat.name);
console.log(cat.age);
console.log(turtle.name);
console.log(turtle.age);


//2.ARRAY DESTRUCTURING
//not used often,kita lagi banyak guna object destructuring

const introduction=["Hello","I","am","Cate"];

//lets say that we want to take some of the values from the array
//we can do it like this
// const greeting=introduction[0];
// const name=introduction[3];

// console.log(greeting,name)

//but this is not a good practice sebab banyak kerja
//so how to do it properly?
//we use array destructuring
//array destructuring allows you to take some values from the array

const[greeting,,,name]=introduction; 
//similar concept as the object destructuring
//but this time kita insert variable name as wakil index yang kita nak keluarkan tu
//kita takleh bubuh 0,,,3 sebab nanti dia error.So kita kena bubuh variable name as wakil 0,,,3 tu
//notice that kita ada dua koma kosong kat situ.This is because kita nak keluarkan index 0 and 3 je.Index yang kita taknak keluarkan tu kita letak koma kosong

console.log(greeting,name)




