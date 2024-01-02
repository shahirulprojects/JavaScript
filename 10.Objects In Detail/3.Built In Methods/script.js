//OBJECT METHODS
//Method is a property of an object that is a function

//Cara2 declare object method
const car={ //car ni object
    myMethod1:()=>{ //myMethod ni adalah method bagi object car tu //Yang ni arrow function

    },
    myMethod2:function(){//yang ni normal function

    },
    myMethod3(){//yang ni apa tah nama dia tapi another way to declare function inside of an objectla

    }

}

//Example
const cat1={
    name:"sophea",
    age:2,
    meow:()=>{
        console.log("Meow,Meow,nak treats,meow meow")
    }

}

cat1.meow(); //to access the object method

//Access all the properties in an object USING a function
//will have to use the "this" Javascript keyword and declare the function using a NORMAL function declaration

const cat2={
    name:"Cipo",
    age:3,
    listAllProperties:function(){
        console.log (this.name,this.age)
    }
}

cat2.listAllProperties(); //boleh je guna console.log(cat2) cam biasa tapi saja nak tunjuk cara lain
