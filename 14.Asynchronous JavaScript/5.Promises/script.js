//Guna contoh yang sama dari subtopic sebelum ni
//PROMISES
//Promises are objects that either return the successfully fetched data or the error

//KALAU PAKAI CALLBACK
// const fetchUser=(userName,callback)=>{
//     setTimeout(()=> {
//         console.log("[Now we have the user's username]")
//         callback({userName})}
//         ,2000)
// }

// const fetchUserPhotos=(userName,callback)=>{
//     setTimeout(()=> {
//         console.log(`[Now we have the photos for ${userName}]`)
//         callback(["Photo 1","Photo 2"])} //array yang mengandungi photos2 tu
//         ,2000)
// }

// const fetchPhotoDetails=(photo,callback)=>{
//     setTimeout(()=> {
//         console.log(`[Now we have the photo details for the photo ${photo}]`)
//         callback(["Details:bla bla bla"])} //array yang mengandungi photos2 tu
//         ,2000)
// }

// fetchUser("Emma",(user)=>{ 
//     console.log(`Your name is:${user.userName}`);

//     fetchUserPhotos(user.userName,(userPhotos)=>{ 
//         console.log(`Your photos are: ${userPhotos}`);

//             fetchPhotoDetails(userPhotos[0],(details)=>{ //fetchPhotoDetails only accepts one photo so in this example we will use Photo 1 which is located at index 0 in the userPhotos array
//                 console.log(`Your photo details are:${details}`)
//             })
//     })
// });

//KALAU PAKAI PROMISE
//NOTES:
//resolve=untuk fetch data/return something
//reject=bila kita tak dapat data yang kita nak fetch tu
const fetchUser=(userName)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
                console.log("[Now we have the user's username]")
                resolve({userName}) //kalau kita nak return something,kita name dia sebagai resolve
                reject("user not found") //kalau kita nak reject something,kita name dia sebagai reject
                } ,2000)                  
    })
}

const fetchUserPhotos=(userName)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log(`[Now we have the photos for ${userName}]`)
            resolve(["Photo 1","Photo 2"])} //array yang mengandungi photos2 tu
            ,2000)
    })
}

const fetchPhotoDetails=(photo)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log(`[Now we have the photo details for the photo ${photo}]`)
            resolve(["Details:bla bla bla"])} //array yang mengandungi photos2 tu
            ,2000)
    })
}

fetchUser("Emma")
    .then((user)=>fetchUserPhotos(user.userName))//kita tulis "user.userName" and bukan "user" sebab "user" tu object,kita nak nilai object tu
    .then((photos)=>fetchPhotoDetails(photos[0]))
    .then((details)=>console.log(`Your photo details are:${details}`))


//the use of .then and .catch
//.then is a callback to execute when the Promise is resolved/reject.Kira boleh dua2 ah
//.catch is a callback to execute ONLY when the promise is rejected

// fetchUser
// .then((user)=>console.log(user.userName))  
// .catch((error)=>console.log(error))


//dia macam yang 
//fetchUser("Emma",(user)=>{ 
//console.log(`Your name is:${user.userName}`)}; tapi versi Promise ha gitu

