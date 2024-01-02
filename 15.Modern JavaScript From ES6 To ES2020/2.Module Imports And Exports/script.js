//IMPORTS AND EXPORTS

import {cats,numberOfCats} from "./cat.js"; //letak curly braces{} camni bila kita ada banyak benda nak import from the same file
import turtle from "./turtle.js"; 

// ./ means that the file we want to import is in the same folder as the file that we want to use the imported file
//to use import we must add export at the file that we want to import
//we also have to add type="module" at the index.html to use the import

console.log(`I have ${numberOfCats} cats`)
console.log(`My cats are: ${cats}`)
console.log(`I also have a turtle.His name is ${turtle}`)
