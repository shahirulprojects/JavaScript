//CALLBACK HELL
//Guna contoh yang sama dari subtopic sebelum ni
//untuk contoh ni kita imagine yang kita buat social media and lepas fetch user punya username,kita nak fetch pulak dia punya photos

const fetchUser=(userName,callback)=>{
    setTimeout(()=> {
        console.log("[Now we have the user's username]")
        callback({userName})}
        ,2000)
}

const fetchUserPhotos=(userName,callback)=>{
    setTimeout(()=> {
        console.log(`[Now we have the photos for ${userName}]`)
        callback(["Photo 1","Photo 2"])} //array yang mengandungi photos2 tu
        ,2000)
}

const fetchPhotoDetails=(photo,callback)=>{
    setTimeout(()=> {
        console.log(`[Now we have the photo details for the photo ${photo}]`)
        callback(["Details:bla bla bla"])} //array yang mengandungi photos2 tu
        ,2000)
}

fetchUser("Emma",(user)=>{ 
    console.log(`Your name is:${user.userName}`);//kita tulis "user.userName" and bukan "user" sebab "user" tu object,kita nak nilai object tu

    fetchUserPhotos(user.userName,(userPhotos)=>{ 
        console.log(`Your photos are: ${userPhotos}`);

            fetchPhotoDetails(userPhotos[0],(details)=>{ //fetchPhotoDetails only accepts one photo so in this example we will use Photo 1 which is located at index 0 in the userPhotos array
                console.log(`Your photo details are:${details}`)
            })
    })
});

//how it works:
//first fetchUser function dulu run,lepastu baru fetchUserPhotos,lepastu baru fetchPhotoDetails
//sebab takkan nak tayang gambar yang salah en untuk user,so kena run dulu fetchUser baru userPhotos
//the same logic works for fetchPhotoDetails sebab takkan nak kutip detail yang salah untuk photo en
//the rest works sama macam subtopic sebelum ni

//but notice that makin lama function tu makin ke kanan
//dia cam sebab ada function dalam function so lama2 dia ke kanan
//ha so inila dipanggil the Callback Hell
//basically Callback Hell ni tak praktikal la sebab katakanla ada banyak function yang bergantung kat each other,tak ke makin teruk ke kanannya nanti
//nanti lama2 dia jadi susah nak maintain
//so because of this,Javascript had introduce the concept of Promises
//Promises ni kita akan belajar dalam subtopic seterusnya

