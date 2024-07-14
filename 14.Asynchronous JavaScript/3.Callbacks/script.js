//DATA FETCHING
//takes the data from API
//opposed from the timeOut() function,we cannot be sure how long it will take to fetch data from the API

//lets say that we want to fetch a user from a database
//asalnya kita buat camni,tapi akan ada problem

// const fetchUser=(userName)=>{
//     setTimeout(()=> {
//     return{userName};
// },2000);
//}

// const user=fetchUser("Emma");
// console.log(`Your username is:${user.username}`); //akan dapat undefined sebab kita kena wait 2 seconds sebelum data username tu kena fetch tapi Javascript engine tak tunggu 2 saat tu so dia just assume benda tu undefined

//note that we cannot write the code like this because this would be synchronous code,we want the code to be asynchronous
//const fetchUser=(userName)=>{
//     return {userName};
// }

//so camna kita nak buat Javascript tunggu 2 saat dulu baru dia fetch data tu
//here comes the concept of callback() function
const fetchUser = (userName, callback) => {
  setTimeout(() => {
    callback({ userName });
  }, 2000);
};

fetchUser("Emma", (user) => {
  //ada 2 parameter dia accept here which is the userName and callback parameter
  console.log(`Your name is:${user.userName}`); //kita tulis "user.userName" and bukan "user" sebab "user" tu object,kita nak nilai object tu
});

//here is a breakdown of what's happening
//okay first bila kita panggil fetchUser tu,dia akan send "Emma" dulu as the userName parameter
//and then after 2 saat,dia akan pass parameter userName tu ke callback function as a parameter
//then parameter userName ni akan dihantar ke parameter kedua fetchUser tu which is user
//and then barula kita boleh console log
//basically callback function ni bila kita call another function from our function declaration
