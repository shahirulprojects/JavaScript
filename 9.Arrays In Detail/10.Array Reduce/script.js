//ARRAY REDUCE
//untuk totalkan nilai elements dalam array into a single value
//tak kirala numbers,string,object,properties of object

//nak cari total grocery 
const groceryList=[29,12,45,35,87,110];

//boleh je pakai forEach method tapi dia akan buatkan kita declare extra variable therefore it is not the best way to do it
//ni contoh kalau pakai For Each method
let sum=0; //extra variable

groceryList.forEach((grocery)=>{
sum+=grocery;
});

console.log(sum);

//ni pulak kalau pakai Reduce method
//accumulator=benda yang gather something
//currentValue=merujuk kepada elements dalam array yang kita tengah rujuk time iteration tu

//Example 1
const total=groceryList.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
//nama parameter boleh letak apa2 tapi saja nak tunjuk yang parameter first is for accumulator value and parameter second is for current value  //0 tu is a initial value of a accumulator.In this case kita letak 0


//how it works
//Loop 1:
//first kita akan gunakan the initial value of the accumulator
//accumulator=0,currentValue=29,accumulator+currentValue=29+0=29  //29 ni akan jadi the new accumulator value
//Loop 2:
//accumulator=29,currentValue=12,accumulator+currentValue=29+12=41 //41 ni akan jadi the new accumulator value pulak
//Loop 3,4,5,6 apply konsep yang sama

console.log(total);//so nanti total dia dapatla 318

//Example 2
const numbers=[1,2,3,4,5];

const jumlah= numbers.reduce((total,price)=>total+price,0)
//how it works
//total=0,price=1, total+price=1 // 1 ni akan jadi the new accumulator value //in this case we named the accumulator value as total
//total=1,price=2, total+price=3 // 3 ni akan jadi the new accumulator value
//total=3,price=3, total+price=6 // 6 ni akan jadi the new accumulator value
//total=6,price=4, total+price=10 // 10 ni akan jadi the new accumulator value
//total=10,price=5,total+price=15 // 15 ni akan jadi the sum value since dia element last

console.log(jumlah);








