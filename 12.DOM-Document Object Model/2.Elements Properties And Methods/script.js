//ELEMENTS PROPERTIES AND METHODS
//Some properties are applicable to all elements and some are applicable only to particular ones only

//for example:
//id and class are applicable to all elements
//type is applicable to input and buttons only

//sama macam subtopic sebelum ni,consider yang di script.js ni adalah documentation penuh untuk cara2 tu
//dalam subtopic ni kita refer index.html BUKAN script.js
//do note that apa yang ada kat index.html tu tak sama dengan sini sebab kita perlu literally ikut apa yang dia buat sebab nanti akan dapat result lain
//do note that yang untuk setiap cara,kita akan write code yang ditunjuk.Code sebelum ni yang untuk cara lain tu kita buang

//TIP 1:dia setiap kali kita  run command dekat console webpage tu,command kita akan hilang lama2.So untuk access commands yang dah hilang tu we just need to press the arrow up button
//TIP 2:kalau nak create new line dekat console webpage tu tekan shift+enter

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Elements Properties And Methods</title>
// </head>
// <body>
//     <h1 class="test abc test1" id="heading">TEST 1</h1>
//     <h2 class="test">TEST 2</h2>
//     <h2 class="test">TEST 3</h2>
//     <button>submit</button>

        //ACCESSING PROPERTIES
        //katakanla kita nak access semua properties yang ada dekat satu element tu,kita boleh assign element tu ke satu variable and then nanti kita call variable tu
        //contoh macam kalau kita nak access semua properties yang ada dekat TEST 1
        //kita boleh buat camni
        //const element=document.querySelector("#heading") //ni kita sign TEST 1 tu ke variable "element" .Do note that kita pakai #heading tu sebab TEST 1 je ada id "heading"
        //and then lepas assigning it to the "element" variable,kita now dah boleh access properties dalam elements tu dah
        //element.className untuk access class name.If kita ada banyak class name,kita boleh pisahkan diorang guna spacebar
        //element.classList untuk access class list.Class list ni is  a list of class assigned to an element.Dia terjadi bila kita ada banyak class name untuk satu element.In this case TEST 1 kita ada 3 class names which is "test","abc","test1"
        //element.id untuk access id
        //element.innerHTML untuk access apa yang heading tu tulis,in this case dia tulis "TEST 1"

        //ELEMENT METHODS
        //kita akan belajar lagi banyak methods once we choose our specific framework
        //tapi kalau nak tau method apa lagi kita boleh guna boleh type console.log("this") so that dia akan keluar macam2 methods
        //sebelum kita guna any methods,kita kena declare dulu variable.In this case we are assigning the button element to the "bttn" variable
        //const bttn=document.querySelector("button") kita guna tag name since ada satu button je 

        //1.addEventListener()
        //addEventListener ni function dia untuk add an event when we perform an action on the element
        //lepas assigned kita akan buat camni bttn.addEventListener() //method ni accept dua benda dalam kurungan dia,benda first ialah type,benda second ialah callback function.Kita guna type "click" sebab kita sedang guna button
        //bttn.addEventListener("click",()=>{alert("you clicked on the button");}) 
        //dia akan display pop up  message once we clicked on the button
    
        //2.getBoundingClientRect()
        //getBoundingClientRect ni function dia untuk tahu detail element tu cam dalam kes kita ni size dia,width dia,height dia,jarak dia dari left,jarak dia dari right and so on
        //lepas assigned kita akan buat camni bttn.getBoundingClientRect() //tak perlu letak apa2 dalam kurungan dia
        //dia akan display all the details about the button element

        //3.hasAttribute()
        //hasAttribute ni function dia untuk check if an element has an attribute or not
        //lepas assigned kita akan buat camni bttn.hasAttribute() //method ni kita kena bubuh attribute apa kita nak check.In this case kita nak cari attribute type.Do note that type is applicable to input and buttons only
        //dia akan display true kalau element tu ada attribute yang kita mention dalam kurungan tu and display false kalau takde

        //4.removeAttribute()
        //removeAttribute ni function dia untuk remove sesuatu attribute dari element tu
        //lepas assigned kita akan buat camni bttn.removeAttribute() //method ni kita kena bubuh attribute apa yang kita nak buang.In this case katakanla kita nak buang attribute type.
        //tapi lepas remove,untuk check sama ada attribute tu dah kena buang ke tak kita kena pakai hasAttribute() method


//     <script src="script.js"></script>
// </body>
// </html>

