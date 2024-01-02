//WORKING WITH CLASSES
//dalam subtopic ni kita refer index.html DAN script.js

//TIP 1:dia setiap kali kita  run command dekat console webpage tu,command kita akan hilang lama2.So untuk access commands yang dah hilang tu we just need to press the arrow up button
//TIP 2:kalau nak create new line dekat console webpage tu tekan shift+enter

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Working With Classes</title>
        //how to use classes to style elements
//     <style>
//         .menu-item{
//             background-color:black;
//             color:white;
//         }
//         .menu-item.active{  //active ni cam kita nak indicate yang kita tengah clicked dekat menu tu sebabtu warna dia berlawanan dengan yang tak active
//             background-color:white;
//             color:black;
//         }
//     </style>
// </head>
// <body>
//     <ul> //ul stands for unordered list
//          <li onclick="menuClicked(this)" class="menu-item">Menu 1</li> //using all the predefined styles tadi
//          <li onclick="menuClicked(this)" class="menu-item active">Menu 2</li> //onclick="menuClicked(this)" bermaksud onclick tu adalah onclick listener di mana bila kita click dia,dia akan panggil the menuClicked function.menuClicked function tu pulak akan pass "this" which represents the current elements that are being clicked on
//          <li onclick="menuClicked(this)" class="menu-item">Menu 3</li>
//          <li onclick="menuClicked(this)" class="menu-item">Menu 4</li>
//     </ul>
//     <script src="script.js"></script>
// </body>
// </html>


//this code is when we want to change the active menu
//contohnya sekarang ni active menu hanyalah menu 2,tapi dengan code ni, bila kita click menu lain dia akan jadikan menu tu pulak active and menu 2 or menu-menu sebelumnya yang active akan jadi tak active
const menuClicked=(currentElement)=>{
    const menuItems=document.getElementsByClassName("menu-item");

    for(let i=0;i<menuItems.length;i++){
        menuItems[i].classList.remove("active"); //akan remove previous menu yang active
     //do note that dia akan buang class name "active" tu.Since class name kita ada spacebar so dia dikira sebagai class listla sebab dia ada banyak class names.
    }

currentElement.classList.add("active"); //akan jadikan the current menu active
//kalau tulis kat webpage console kita tulis camni event.target.classList.add("active");
}



