const array=[1,2,3,4,5]

//ARRAY SOME
//test whether at least ONE element in the array passes a certain test.Test tu function yang kita akan define
//returns true or false
console.log(array.some((number)=>number>3)); // kurungan array some() is specifically untuk letak function

//ARRAY EVERY
//test whether EVERY element in the array passes a certain test.Test tu function yang kita akan define
//returns true or false
console.log(array.every((number)=>number>1)); // kurungan array every() is specifically untuk letak function
