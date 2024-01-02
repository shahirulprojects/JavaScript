//THE "THIS" KEYWORD
//used to reference the object that is executing the current function

//Example 1
function Sentence(words){ //make sure that it is a normal function declaration and NOT arrow function because arrow function cannot use the "this" keyword
    this.words=words;

    console.log(this);
}

const firstString=new Sentence("Hello,this is a sentence")

//berdasarkan pemahaman sendiri,it works like this
//when the const firstString=new Sentence("Hello,this is a sentence") declared,it will call the "Sentence" function and then pass the "Hello,this is a sentence" to the "words" parameter
//and then "words" parameter will be assigned to the value of "Hello,this is a sentence"
//and then we declare a new variable with the SAME NAME as "words" because we want to use the "this" keyword
//dia macam dalam Java jugak,bila dua variable tu nama sama kita akan guna the "this" keyword
//and then when we are printing,it will console log the variable that has the "this" keyword
//kalau kita pakai nama variable lain2 kita takdela perlu guna "this" keyword ni and bila console log pun kita guna nama variable yang kita nak print tu jela
//tapi output dia akan jadi lain sikitla, kalau pakai "this" keyword output dia akan jadi Sentence {words: 'Hello,this is a sentence'}
//kalau pakai nama variable lain2 output dia akan jadi Hello,this is a sentence
//don't know the explanation behind it but jangan risau tak penting sangat pun "this" keyword ni.

//Example 2
const person={
    name:"Emma",
    getName(){
        console.log(this)
    }
}

person.getName(); 
//the "this" keyword will refer to the object that the keyword is in.In this case dia dalam person Object so it will refer to the person Object whose name is "John"
//hence why person.getName(); will print name:"John"

//Example 3
function car(colour,brand,topSpeed){
    this.colour=colour;
    this.brand=brand;
    this.topSpeed=topSpeed;

    console.log(this);
}

const blackCar=new car("black","BMW",210) //since kita panggil the "car" function,dia akan print semua maklumat yang kita dah assign ke function tu
const redCar=new car("red","Ferrari",300) //ni dia akan print information pasal red car la instead of printing both black car and red car information.This is because the function will print the values that is CURRENTLY being assigned to it



