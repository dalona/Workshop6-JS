alert('WELCOME TO `FIAT` HOTEL');

const dbReservations = [];
let id = 0


// Ruta del archivo data.json

const url = 'section5/data.json'; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar los datos.');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Habitaciones:', data.rooms);
          console.log('Tipos de Habitaciones:', data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 2000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    flag = true;
    
    while (flag) {
      let guessName = prompt('Enter your name:');
      let checkIn = prompt('Enter the Check-in date MM/DD/YYYY:');
      let checkOut = prompt('Enter the Check-out date MM/DD/YYYY:');
      
      let option = prompt(
        'What do you want to do?\n\n1.Make a reservation\n2.View your current reservations\n3.Cancel Reservation\n4.Edit Reservation\n\n5.Exit'
      );
      switch (option) {
        case '1':
          numberPeople = prompt('How many people will stay?');

          let checker = roomTypes.filter((el) => el.capacity >= numberPeople).map((el) => el.id);

          let checkerRooms = rooms.filter((el) => checker.includes(el.roomTypeId)
          );


          // Mostrar el contenido de las habitaciones después de cargar los datos
          const userInput = prompt(
            'Enter the Number of the room you want to reserve: ' +
              checkerRooms
                .map((room) => {
                  return `\nRoom Number: ${room.number} (${
                    roomTypes.find((type) => type.id === room.roomTypeId).name
                  })`;
                })
                .join(', ')
          );

          id++
          const reservations = { guessName, checkIn, checkOut, userInput, id };
          dbReservations.push(reservations);
            
          alert('Reservation Successfully Booked');

          break;

        case '2':
          let find = prompt('What name is under the reservation?');

          let findReservationByName = function (find) {
            return dbReservations.filter((el) => el.guessName === find);
          };

          console.log(findReservationByName(find));

          break;

        case '3':

          let cancel = prompt('What name is under the reservation that you want to CANCEL?');

          function cancelReservation(cancel) {
            const index = dbReservations.findIndex((reservation) => reservation.guessName === cancel);
            if (index !== -1) {
              dbReservations.splice(index, 1);
              return true; // Reservation successfully canceled
            }
            return false; // Reservation not found
          }
          
          if (cancelReservation(cancel)) {
            alert('Reservation Successfully Canceled');
          } else {
            alert('Reservation Not Found');
          }
          break;
          

        case '4':
          
          console.log('Current Reservations:');
          dbReservations.forEach((reservation, index) => {
            console.log(`${index + 1}. Name: ${reservation.guessName}, Check-in: ${reservation.checkIn}, Check-out: ${reservation.checkOut}`);
          });

          // Ask the user to input the number of the reservation to edit
          let editNumber = prompt('Enter the number of the reservation you want to edit:');
          editNumber = parseInt(editNumber);

          // Check if the input is valid
          if (editNumber >= 1 && editNumber <= dbReservations.length) {
            // Get the reservation to edit
            let reservationToEdit = dbReservations[editNumber - 1];

            // Ask the user to edit check-in and check-out dates
            let newCheckIn = prompt('Enter the new Check-in date MM/DD/YYYY:');
            let newCheckOut = prompt('Enter the new Check-out date MM/DD/YYYY:');

            // Update the reservation with the new dates
            reservationToEdit.checkIn = newCheckIn;
            reservationToEdit.checkOut = newCheckOut;

            alert('Reservation Successfully Edited');
          } else {
            alert('Invalid reservation number');
          }
          break;


          case '5':
            flag = false;
  

      }

          
    }

    // ... Continuar con la lógica de la app
  })
  .catch((error) => {
    console.error('Error al manejar la promesa:', error);
  });

