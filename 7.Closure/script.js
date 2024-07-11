//CLOSURE
//Basically dia macam still nak hidupkan outer function tu dengan letakkan variable outer function dalam inner function

//Example 1
const init = () => {
  const hobby = "Learning Javascript"; //local variable created by init function

  const displayHobby = () => {
    //displayHobby is the inner function,a closure
    console.log(hobby); //using a variable created in the parent function
  };

  return displayHobby;
};

const myFunc = init();
myFunc();

//Example 1 is actually sama je dengan bawah ni
// const init =()=>
// {
//     const hobby="Learning Javascript";
//     const displayHobby=()=>{
//         console.log(hobby);
//     }
//     displayHobby();
// }
// init();

//Example 2
const outer = () => {
  const outerVar = "Hola!";

  const inner = () => {
    const innerVar = "Hi!";

    console.log(outerVar, innerVar);
  };
  return inner; //buat camni sebab kita actually nak access inner function tu
};

const innerFn = outer(); //kita nak access inner function tu actually tapi sebab dia dalam outer function so kita kena panggil outer functionla en
//bila kita panggil satu function,dia akan return statement.Ha time ni la kita return inner function sebab kita kan actually nak panggil dia

innerFn();

// PRACTICE

const name1 = () => {
  const nama = "Emma";

  const name2 = () => {
    console.log(nama);
  };

  return name2;
};

const panggilName = name1();

panggilName();
