// vars call
// console.log("Valor de a:", a);
// console.log("Valor de b:", b);
// console.log("Valor de c:", c);

// functions call
// console.log("Resultado de funcionDeclarada:", funcionDeclarada());
// console.log("Resultado de funcionExpresada:", funcionExpresada());

// // vars declaration
// var a = 1;
// let b = 2;
// const c = 3;

// // functions declarations
// function funcionDeclarada() {
//   return "Función declarada ha sido llamada.";
// }

// const funcionExpresada = function () {
//   return "Función expresada ha sido llamada.";
// };


alert(`Given the following lines of code:\n
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

vars declaration
var a = 1;
let b = 2;
const c = 3;

functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`)

aValue= prompt("Enter the value of this expression = console.log(`Valor de a:`, a);").toLowerCase();
bValue= prompt("Enter the value of this expression = console.log(`Valor de b:`, b); If there is an error. Enter the error").toLowerCase();
cValue= prompt("Enter the value of this expression = console.log(`Valor de c:`, c);").toLowerCase();

dfValue=prompt("Enter the value of this expression = console.log( Resultado de funcionDeclarada:, funcionDeclarada()").toLowerCase();
efValue=prompt("Enter the value of this expression = console.log( Resultado de funcionExpresada:, funcionExpresada());").toLowerCase();

if (aValue === "undefined"){
    alert("You are right :). The value of `Valor de a:` is: undefined.\n\nVariables declared with `var` are initialized with undefined ")
}else{
    alert("You are wrong. The value of `Valor de a:` is: undefined.\n\nVariables declared with `var` are initialized with undefined ")
}

if (bValue === "uncaught reference error"){
    alert("You are right :). The value of `Valor de b:` is: uncaught reference error.\n\nVariables with let and const cannot be accessed before their declaration. ")
}else{
    alert("You are wrong. The value of `Valor de b:` is: uncaught reference error.\n\nVariables with let and const cannot be accessed before their declaration. ")
}

if (cValue === "uncaught reference error"){
    alert("You are right :). The value of `Valor de c:` is: uncaught reference error.\n\nVariables with let and const cannot be accessed before their declaration. ")
}else{
    alert("You are wrong. The value of `Valor de c:` is: uncaught reference error.\n\nVariables with let and const cannot be accessed before their declaration.  ")
}

if (dfValue === "funcion declarada ha sido llamada" ){
    alert("You are right :). The value of `funcionDeclarada()` is:\n\n Función declarada ha sido llamada ")
}else{
    alert("You are wrong. The value of `funcionDeclarada()` is:\n\n Función declarada ha sido llamada ")
}

if (efValue === "funcion expresada ha sido llamada"){
    alert("You are right :). The value of `funcionExpresada()` is:\n\n Función expresada ha sido llamada ")
}else{
    alert("You are wrong. The value of `funcionExpresada()` is:\n\n Función expresada ha sido llamada ")
}


