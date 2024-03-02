//ARRAY FILTER
//Filters certain elements from an array
//dia sama macam Array Map jugak sebab dia create NEW array
//DOES NOT CHANGE THE ORIGINAL ARRAY SINCE WE CREATE A NEW ARRAY
//dia macam gabungan for loop and if statement

//Example 1
const numbers = [-10, 0, -2, 15, -36, 25];

const positiveNumbers1 = numbers.filter((number) => number >= 0); //ni arrow function yang disimplify sebab ada satu je return statement (rujuk nota function)

console.log(positiveNumbers1);

//camna rupa dia kalau guna for loop and if-else statement
const positiveNumbers2 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 0) {
    positiveNumbers2.push(numbers[i]); //untuk masukkan elements yang dah ditapis tu ke dalam new array
  }
}

console.log(positiveNumbers2);

//Example 2
const employeeData = [
  { name: "Lydia", overtime: 5 },
  { name: "Emma", overtime: 10 },
  { name: "Dahyun", overtime: 12 },
];

//finding employees with 7 or more hours of overtime
const employeesToReward = employeeData.filter(
  (employee) => employee.overtime >= 7
);
console.log(employeesToReward); //dia akan tayang nama dan overtime

//tapi camna kalau kita nak dia tayang nama je?
//ha kita buat camni
const employeeNames = employeesToReward.map((employee) => employee.name); //pakai Array Map
console.log(employeeNames);

//tapi camna pulak kalau kita nak kasi message dekat setiap employee tu?
//ha kita buat camni
employeeNames.forEach((name) => console.log(`${name} received a reward`)); //pakai Array forEach and backtick quote
