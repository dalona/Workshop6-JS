// console.log("Inicio del script");

// setTimeout(() => {
//   console.log("Primer setTimeout");
// }, 0);

// setTimeout(() => {
//   console.log("Segundo setTimeout");
// }, 0);

// Promise.resolve("Promesa resuelta").then(console.log);

// console.log("Fin del script");



let setAnswers = []

alert("Please open the Console of the browser")

console.log (`Given the following lines of code:\n\n
console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");
"`)


const answer = alert  ("What do you think is the order in which the messages will be displayed in the console?");
let answerOne = prompt("1st Message\n\n1. Inicio del script\n\n2. Primer setTimeout\n\n3. Segundo setTimeout\n\n4. Promesa resuelta\n\n5. Fin del script");
let answerTwo = prompt("2nd Messag\n\n1. Inicio del script\n\n2. Primer setTimeout\n\n3. Segundo setTimeout\n\n4. Promesa resuelta\n\n5. Fin del script");
let answerThree = prompt("3rd Message\n\n1. Inicio del script\n\n2. Primer setTimeout\n\n3. Segundo setTimeout\n\n4. Promesa resuelta\n\n5. Fin del script");
let answerFour = prompt("4th Message\n\n1. Inicio del script\n\n2. Primer setTimeout\n\n3. Segundo setTimeout\n\n4. Promesa resuelta\n\n5. Fin del script");
let answerFive = prompt("5th Message\n\n1. Inicio del script\n\n2. Primer setTimeout\n\n3. Segundo setTimeout\n\n4. Promesa resuelta\n\n5. Fin del script");

if (answerOne === "1"){
    alert("CONGRATULATIONS! - The 1st Message is: `Inicio del script")
}else{
    alert("Wrong answer...\n\nThe 1st Message is: `Inicio del script`")
}
    

if (answerTwo === "5" ){
    alert("CONGRATULATIONS! - The 2nd Message is: `Fin del script")
}else{
    alert("Wrong answer...\n\nThe 2nd Message is: `Fin del script`")
}
    
    
if (answerThree === "4" ){
    alert("CONGRATULATIONS! - The 3rd Message is: `Promesa resuelta")
}else{
    alert("Wrong answer...\n\nThe 3rd Message is: `Promesa resuelta`")
}


if (answerFour === "2" ){
    alert("CONGRATULATIONS! - The 4th Message is: `Primer setTimeout")
}else{
    alert("Wrong answer...\n\nThe 4th Message is: `Primer setTimeout`")
}

if (answerFive === "3" ){
    alert("CONGRATULATIONS! The 5th Message is: `Segundo setTimeout")
}else{
    alert("Wrong answer...\n\nThe 5th Message is: `Segundo setTimeout`")
}




