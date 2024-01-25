//Guna contoh yang sama dari subtopic sebelum ni
//ASYNC AWAIT
//it is an addition to Promises

//ASYNC FUNCTION RETURN PROMISES
//AWAIT KEYWORD WAITS FOR THE PROMISE TO RETURN A RESULT // kira macam access nilai dalam Promise tu la
//ASYNC AND AWAIT ARE ALWAYS USED TOGETHER

const fetchNumber = async () => {
  return 25;
};
//kalau nak access nilai 25 tu kita takleh buat camni
console.log(fetchNumber()); //sebab nanti dia akan return Promise padahal kita nak nilai dalam Promise tu

//kita boleh buat camni untuk access nilai 25 tu
fetchNumber().then((number) => console.log(number));
//tapi cara ni macam panjang en so kita ada lagi satu cara which is guna keyword "await" untuk access nilai Promise tu

//ha ceni cara dia
const consoleFetchedNumber = async () => {
  console.log(await fetchNumber()); //kalau nak guna "await" keyword,dia mesti digunakan dalam async function
};

consoleFetchedNumber();
//guna cara ni lagi sesuai sebab dia sama je cam synchronous cuma tambah beberapa keyword je so takdela susah2 kena pakai "then" la apa la
//kalau guna cara .then tu cam renyah sebab dia cam tak feel natural la gitu orang kata

//so based on what we learnt,let's modify the previous code from the previous subtopic to implement the async await
//do note that since async await is just an addition to Promises,we dont have to change the function declaration,the only thing that we have to change is how we call the function

const fetchUser = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("[Now we have the user's username]");
      resolve({ userName });
      reject("user not found");
    }, 2000);
  });
};

const fetchUserPhotos = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Now we have the photos for ${userName}]`);
      resolve(["Photo 1", "Photo 2"]);
    }, 2000);
  });
};

const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Now we have the photo details for the photo ${photo}]`);
      resolve(["Details:bla bla bla"]);
    }, 2000);
  });
};

const displayData = async () => {
  const user = await fetchUser("Emma"); //dia akan tunggu dulu data tu difetch baru dia proceed ke next line
  const photos = await fetchUserPhotos(user.userName); //kita tulis "user.userName" and bukan "user" sebab "user" tu object,kita nak nilai object tu
  const details = await fetchPhotoDetails(photos[0]);

  console.log(details);
};

displayData();

//PERBANDINGAN CARA CALL FUNCTION

//CALLBACK
// fetchUser("Emma",(user)=>{
//     console.log(`Your name is:${user.userName}`);

//     fetchUserPhotos(user.userName,(userPhotos)=>{
//         console.log(`Your photos are: ${userPhotos}`);

//             fetchPhotoDetails(userPhotos[0],(details)=>{
//                 console.log(`Your photo details are:${details}`)
//             })
//     })
// });

//PROMISES
// fetchUser("Emma")
//     .then((user)=>fetchUserPhotos(user.userName))
//     .then((photos)=>fetchPhotoDetails(photos[0]))
//     .then((details)=>console.log(`Your photo details are:${details}`))

//PROMISES WITH ASYNC AWAIT
// const displayData=async()=>{
//     const user=await fetchUser("Emma");
//     const photos=await fetchUserPhotos(user.userName);
//     const details=await fetchPhotoDetails(photos[0]);

//     console.log(details);
// }
