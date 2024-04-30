
let checker = function (){
console.log("Callback Ejecutado")
}



function manejarAsincronia(callback){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if(false){resolve (console.log("Promesa cumplida!"),callback());
            
        }else{
         reject (console.log("Error"),callback())
               }
        },2000)

    })
} 

manejarAsincronia(checker);


// Callback: Pasar una funcion como parametro de otra funcion