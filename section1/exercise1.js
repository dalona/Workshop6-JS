


alert(`Given the following lines of code:\n\n // Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();`)

let globalGuest = prompt("Do you think it´s possible to access to the GLOBAL variable from any part of the code \n\n Yes or No").toLowerCase();
let functionGuest = prompt("Do you think it´s possible to access to FUNCTION variable from any part of the code \n\nYes / No").toLowerCase();
let blockGuest = prompt("Do you think it´s possible to access to BLOCK variable from any part of the code? \n\nYes / No").toLowerCase();
let answerNo = []
let answerYes = []


if (globalGuest === "yes") {
    let possible = prompt("Enter why you think it´s possible to access to the Global variable");
    answerYes.push(possible);
    alert("You are right :). We can access to the globalVariable variable from any part of the code")
} else if (globalGuest === "no") {
    let possible = prompt("Enter why you think it´s NOT possible to access to the Global variable");
    answerNo.push(possible);
    alert("You are wrong. We can access to the globalVariable variable from any part of the code")
}else if (globalGuest === "") {
    alert("Empty entries are not valid")
}else{
    alert("Please enter a valid option")
}   

if (functionGuest === "yes") {
    let possible = prompt("Enter why you think it´s possible to access to the functionVariable");
    answerYes.push(possible)
    alert("You are right :). We can access to the functionVariable from any part of the code. Because in this case is using `var`")
}else if (functionGuest === "no")  {
    let possible = prompt("Enter why you think it´s NOT possible to access to the functionVariable");
    answerNo.push(possible)
    alert("You are wrong. We can access to the functionVariable from any part of the code. Because in this case is using `var`")
}else if (functionGuest === "") {
    alert("Empty entries are not valid")
}else{
    alert("Please enter a valid option")
}    

if (blockGuest === "yes") {
    let possible = prompt("Enter why you think it´s possible access the blockVariable");
    answerYes.push(possible)
    alert("You are wrong. We cannot access to the blockVariable from any part of the code.");
}else if( blockGuest ===  "no") {
    let answerNo = prompt("Enter why you think it´s NOT possible access the blockVariable");
    answerNo.push(possible)
    alert("You are right :). We cannot access to the blockVariable from any part of the code.")    
}else if (blockGuest === "") {
    alert("Empty entries are not valid")
}else{
    alert("Please enter a valid option")
}  

console.log(answerNo, answerYes);



