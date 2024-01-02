//1.ARITHMETIC OPERATORS

const c=5;
const d=10;
let result1=0;
let result2=0;
let result3=0;
let result4=0;
let result5=0;
let result6=0;

//Addition
result1=c+d;
console.log(result1);

//Subtraction
result2=c-d;
console.log(result2);

//Multiplication
result3=c*d;
console.log(result3);

//Division
result4=c/d;
console.log(result4);

//Exponent
result5=c**d; //c kuasa d
console.log(result5);

//Modulo
result6=c%d;
console.log(result6);

//Increment Decrement
let result7=20;
let result8=20;

result7++;
console.log(result7);

result8--;
console.log(result8);

// 2.COMPARISON OPERATORS
//return true or false
// EXAMPLE: < , > , ==

const a=5 ;
const b=10;

//Greater than
console.log(a>b);

//Greater than or equal to
console.log(a>=b);

//Less than 
console.log(a<b);

//Less than or equal to
console.log(a<=b);

//Loose equality
console.log(a==b);

//Loose inequality
console.log(a != b);

//Strict equality (used more often than Loose equality)
console.log(a===b);

//Strict inequality (used more often than Loose inequality)
console.log(a!==b); 

//STRICT VS LOOSE 
//Strict ni dia detail lagi sebab dia akan tengok data type variable tu (COMPARES VALUES AND DATA TYPES)
//Kalau loose dia tak kisah data type variable tu janji value sama (COMPARES VALUES)
//Example:

//Loose equality
console.log(5=="5"); //dia akan tunjuk true even though data type tak sama jenis sebab value sama

//Strict equality
console.log(5==="5"); //dia akan tunjuk false sebab tak sama data type even though value sama

//CONCLUSION:ALWAYS USE STRICT EQUALITY!!!

// 3.LOGICAL OPERATORS
//EXAMPLE: AND,OR,NOT

//AND: &&
console.log(true && false) //will return false because all operands need to be true

//OR: ||
console.log(true || false) //will return true because at least one operands need to  be true
console.log(false || false) //will return false

//NOT:!
console.log (!true)
console.log (!false)

//4. ASSIGNMENT OPERATORS
let number1=5;
let number2=5;
let number3=5;
let number4=5;

number1+=5; //the same as number1 = number1 + 5;
number2-=5; //the same as number2 = number2 - 5;
number3*=5; //the same as number3 = number3 * 5;
number4/=5; //the same as number4 = number4 / 5;

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);

//Can also be used with strings
let string="Hello";
string+=" I am Shahirul!";

console.log(string);
