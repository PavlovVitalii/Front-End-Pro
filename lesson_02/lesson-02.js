// Task №1
const firstString = prompt("Please enter first string.","");
const secondString = prompt("Please enter second string.","");
const thirdString = prompt("Please enter third string.","");
const result = firstString + " " + secondString + " " + thirdString; 
alert(`Result = ${result}`);


// Task №2
const number = 12345;
const arr = String(number).split("");

arr.forEach(el => {
 console.log(el);   
});
