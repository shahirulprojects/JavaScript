//SYNCHRONOUS JAVASCRIPT
//Synchronous JavaScript is one in which the code is executed LINE BY LINE  and their tasks are completed instantly
//In other words,there is no time delay in the completion of the tasks for those lines of code
//for example

const synchronousOne=()=>{
    console.log("Synchronous One"); //lepastu code ni (2)

    synchronousTwO(); //and then code ni (3)

    console.log("Synchronous One,PART 2") //and lastly code ni (4)
}

const synchronousTwO=()=>{
    console.log("Synchronous Two");
}

synchronousOne(); //dia akan execute code ni dulu (1)

//ASYNCHRONOUS JAVASCRIPT
//Asynchronous JavaScript is one in which some lines of code take time to run.These tasks are run in the background while the JavaScript engine keeps executing other lines of code
//When the result of the asynchronous tasks are available,it is then used in the program
//dia macam nak optimize kan performance la,kalau nak tunggu code yang take time to execute tu siap, pastu baru proceed ke code lain, kan tak efficient tu

const asynchronousOne=()=>{
    console.log("Asynchronous One"); //lepastu code ni (2)

    asynchronousTwO(); //and lastly code ni (4)

    console.log("Asynchronous One,PART 2") //and then code ni (3)
}

const asynchronousTwO=()=>{
    setTimeout(()=>console.log("Asynchronous Two"),2000)
}

asynchronousOne(); //dia akan execute code ni dulu (1)

//this is because since the asynchronousTwo() function has to wait for 2 seconds first to be executed,JavaScript engine will execute other code first while waiting for the 2 seconds

