

console.log("Mensaje 1: Inmediatamente")



function st (){
    setTimeout(() =>{
        console.log("Mensaje 2: Con timeout de 0 segundos")
    },0)

    setTimeout(()=>{
        console.log("Mensaje 3: Con timeout de 1 segundo")
    },1000)

}

st();

setTimeout (() =>{
    let question= confirm(`¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? - ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?`)
    if (question){
        prompt("Escribe tu respuesta")
    }else{
        alert("Programa Finalizado")
    }
},3000)


