//CREATING,TRAVERSING,AND REMOVING NODES
//dalam subtopic ni kita refer index.html DAN script.js

//TIP 1:dia setiap kali kita  run command dekat console webpage tu,command kita akan hilang lama2.So untuk access commands yang dah hilang tu we just need to press the arrow up button
//TIP 2:kalau nak create new line dekat console webpage tu tekan shift+enter

//1.CREATE ELEMENT
//use document.createElement() //dalam kurungan tu () kita letak nama element yang kita nak cipta tu
//for example document.createElement("h1")
//the created element can be added attribute and content using the elements properties and methods that we have learnt
//the createElement() method just create the element but does not add it to the DOM
//to add it to the DOM,we will be using the appendChild method
//we can add the new element to any existing elements or to the main body

//STEPS
//1.create a new element
//document.createElement("h1")

//2.assign a variable to the new element
//const heading=document.createElement("h1")

//3.assign a variable to the body element / the element that we want to add our new element
//const body=document.querySelector("body")

//4.use the appendChild() method to put the new element to the body element / the element that we want to add our new element
//body.appendChild(heading)​

//5.add content to our new element (boleh je buat ni kat awal2 step)
//heading.innerText="Hello,World!";


//2.TRAVERSE ELEMENT

//STEPS
//1.assign a class name to a variable
//const subjects=document.querySelector(".subjects") //every element that has the class name of "subjects" will be stored in the variable
//disebabkan kita punya case nak cari element yang favourite subject,kita boleh specifickan lagi code kita
//const favSubject=document.querySelector(".fav-subject"); //element that has the class name of "fav-subject" will be stored in the variable


//2.After finding the elements with the specific class name,we can also find other elements that are related with the element
//we can use methods such as .firstElementChild , .lastElementChild , .previousElementSibling , .nextElementSibling , .parentElement , .childNodes , .firstChild , .lastChild , .previousSibling , .nextSibling , .parentNode
//do note that we write it like this favSubject.firstElementChild


//3.REMOVE ELEMENTS
//removing elements that is no more needed after some action or unnecessary
//just use the .remove() to remove the elements
//for example, use favSubject.remove() to remove the elements that have the class names of "favSubject"

