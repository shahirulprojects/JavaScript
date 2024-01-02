//ASYNCHRONOUS CODE
//selamani yang kita belajar adalah synchronous,kalini kita belajar asynchronous pulak
//NOTE:do note that kan ada banyak section dalam ni so before executing the other section kita kena comment dulu function lain sebab nanti dia tak jadi


//1.setInterval() & clearInterval()
//allows you to execute a chunck of code every time a specified amount of milliseconds pass
//accept two things in the function which is a call back function and the amount of milliseconds we want to set
//dia macam loop la yang akan loop every time a specified amount of milliseconds pass
//but how do we stop an interval from going on forever?
//Any interval can be stored as a variable which can then be cleared by the clearInterval() function
//for example,

const myInterval1=setInterval(()=>console.log("Hello World"),1000) //this function will be executed EVERY 1000 milliseconds / 1 second

clearInterval(myInterval1); //akan clear terus myInterval1 tu,tu yang bila execute tak nampak apa2 tu hahaha
                            //kalau nak nampak result kena comment dulu clearInterval() ni

//rupa asal dia kalau tak camni sebelum kita assign dia to a variable and sebelum kita simplify arrow function tu
// setInterval(()=>{
//     console.log("Hello World!")
// },1000); 


//2.setTimeout() & clearTimeout()
//allows you to wait a certain amount of time before executing a chunck of code
//do note that other code outside the timeout will continue execution as normal
//tapi dia bukan loop,dia just akan execute code tu sekali je
//cara guna setTimeout() similar je cam setInterval()
//cara guna clearTimeout() similar je cam clearInterval()

const myInterval2=setTimeout(()=>console.log("Hello World"),5000)//this function will be executed AFTER 5000 milliseconds / 5 seconds

clearTimeout(myInterval2);//akan clear terus myInterval2 tu,tu yang bila execute tak nampak apa2 tu hahaha
                          //kalau nak nampak result kena comment dulu clearTimeout() ni

//3.SYNCHRONOUS VS ASYNCHRONOUS
//kalau synchronous,code kita kan akan execute code yang on the top dulu baru code yang on the bottom tapi kalau asynchronous, code yang on the bottom boleh diexecute dulu SEBELUM code yang on the top
//for example,
const myInterval3=setTimeout(()=>console.log("Hello World at the top"),5000)

console.log("Hello World at the bottom")

//dia akan execute "Hello World at the bottom" dulu which is at the bottom and AFTER 5 second baru dia execute "Hello World at the top" which is at the top

