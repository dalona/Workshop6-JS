





// Ruta del archivo data.json
const url = "https://jsonplaceholder.typicode.com/posts"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    let execute = Number(prompt("In how many seconds do you want to execute the program?")*1000);


    setTimeout(() =>{
       
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Username:", data.userId);
          console.log("ID:", data.id);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    },execute)
  })
  };

  cargarYMostrarData().then((url) => {
    console.log(url)
  })
