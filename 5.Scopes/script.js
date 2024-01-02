//1.GLOBAL SCOPE
//Boleh digunakan dekat semua bahagian dalam code
//macam "public class" la kalau dalam Java
const name="John";

const logName=() =>{
    console.log(name);
}

logName();


//2.LOCAL SCOPE / FUNCTION SCOPE
const someFunction=()=>{
    const nama="Shahirul"; //nama ni hanya boleh digunakan dalam arrow function ni je and tak boleh dipanggil kat luar sebab kita declare DALAM function,so dia jadi local variable
                           //kalau ada function lain yang guna variable "nama" jugak pun takpe sebab benda tu hanya dideclare dalam function dia sahaja
    console.log(nama); 

        const anotherFunction=()=>{ //declare function dalam function

            console.log(nama); 
        }

        anotherFunction(); //dia akan print Shahirul jugak sebab benda bawah boleh guna variable atas tapi benda atas takleh guna variable bawah

}

someFunction();

//3.BLOCK SCOPE
//Sama je macam local scope

if(true){

    const nama="Shahirul";
    console.log(nama); //variable "nama" hanya boleh dipanggil dalam "if" block ni je sebab dia kena declare dalam ni
}
