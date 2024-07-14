//DOM
//it is a standard to access and share documents or websites all over the Internet
//it represents how a particular document is structured
//it also helps programming languages like Javascript and others to understand and modify the website
//HTML DOM defines how a HTML page is structured (how it can be modified,how can we modify the properties,how we can add styles)
//In simple words,HTML DOM is a tree of nested HTML elements that are defined while designing the HTML page
//Therefore we must follow certain rules to actually define the HTML page
//DOM is not a language but more of a standard to represent a document over the web
//kita akan guna "document." sebab document mengandungi semua benda tentang webpage kita

//dalam subtopic ni kita refer index.html BUKAN script.js
//kita pun also banyak guna console dekat webpage tu (Bukak webpage>Inspect>Console)
//but since kita takleh comment dekat index.html sebab nanti dia akan keluar dekat webpage apa yang kita komen tu,so sila rujuk comments di sini
//do note that apa yang ada kat index.html tu tak sama dengan sini sebab kita perlu literally ikut apa yang dia buat sebab nanti akan dapat result lain
//do note that yang untuk setiap cara,kita akan write code yang ditunjuk.Code sebelum ni yang untuk cara lain tu kita buang
//consider yang di script.js ni adalah documentation penuh untuk cara2 tu

//TIP 1:dia setiap kali kita  run command dekat console webpage tu,command kita akan hilang lama2.So untuk access commands yang dah hilang tu we just need to press the arrow up button
//TIP 2:kalau nak create new line dekat console webpage tu tekan shift+enter

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Introduction to DOM</title>
// </head>
// <body>
//
//letak id sebab nanti senang nak cari/select element
//ada 3 cara untuk cari/select element: id , tag name , class name , CSS selectors

//ID:
//we can do that by typing const el=document.getElementById("element-below-input") at the webpage console.Bukak webpage>Inspect>Console
//akan dapat undefined,tapi takpe kita type ni console.log(el)
//<input></input>
//<h1 id="element-below-input">TEST 1</h1>

//TAG NAME:
//Used when we want to manipulate all elements from a particular kind
//lets say we want to manipulate all headings in our website (jenis/nama headings:h1)
//we can do that by typing document.getElementsByTagName("h1") at the webpage console.Bukak webpage>Inspect>Console
//akan dapat ni HTMLCollection(2) [h1, h1] which is dalam array.Array tu mengandungi elements yang ada jenis headings h1
//<h1>TEST 1</h1>
//<h1>TEST 2</h1>

//CLASS NAME:
//class name are assigned to elements to style them uniquely
//we can do that by typing document.getElementsByClassName("test") at the webpage console.Bukak webpage>Inspect>Console
//akan dapat ni HTMLCollection(2) [h1.test, h1.test] which is dalam array.Array tu mengandungi elements yang ada class name "test"
//<h1 class="test">TEST 1</h1>
//<h1 class="test">TEST 2</h1>

//CSS SELECTORS:
//Css selectors combine multiple classes,IDs,tag names, and many more things to actually select a particular element
//kira macam dia tapis betul2 la.Consider it macam if statement yang camni if(a && b)
//dia kena satisfy dua2 kriteria a & b dulu baru dia akan kena select
//we can do that by typing document.querySelectorAll("h2.test") at the webpage console.Bukak webpage>Inspect>Console
//akan dapat ni NodeList(2) [h2.test, h2.test] which is dalam array.Array tu mengandungi elements yang ada tag name "h2" and class name "test"
//<h1 class="test">TEST 1</h1>
//<h2 class="test">TEST 2</h2>
//<h2 class="test">TEST 3</h2>

//we can use querySelector to replace all other methods we learnt so far in this DOM
//we use document.querySelector() to target only one specific element
//we use document.querySelectorAll() to target multiple elements

//contoh kalau nak ganti cara selecting elements by ID
//document.querySelectorAll("#element-below-input") // # tu memang kena letak

//contoh kalau nak ganti cara selecting elements by TAG NAME
//document.querySelectorAll("h1")

//contoh kalau nak ganti cara selecting elements by CLASSNAME
//document.querySelectorAll(".test")

//     <script src="script.js"></script>
// </body>
// </html>
