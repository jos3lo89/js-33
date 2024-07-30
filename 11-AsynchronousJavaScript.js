/* 
*** Callbacks ***

Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se complete una operación asíncrona.
*/

function fetchData1(callback) {
  setTimeout(() => {
    const data = "Datos obtenidos callback";
    callback(data);
  }, 500);
}

function processData(data) {
  console.log(data);
}

fetchData1(processData);

/* 
***  Promesas (Promises) *** 
Una promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.

*/

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Datos obtenidos promesa");
      } else {
        reject("Error al obtener datos");
      }
    }, 1000);
  });
}

fetchData2()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/*
*** async/await ***

El async/await es una sintaxis que permite trabajar con promesas de manera más limpia y legible.
*/

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Datos obtenidos async / await");
      } else {
        reject("Error al obtener datos");
      }
    }, 1000);
  });
}

async function getData3() {
  try {
    const data = await fetchData3();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData3();

/* 
*** Temporizadores (setTimeout y setInterval) ***

Los temporizadores permiten ejecutar funciones después de un tiempo especificado.
*/

setTimeout(() => {
  console.log("Mensaje después de 1 segundo");
}, 1000);

const intervalId = setInterval(() => {
  console.log("Mensaje cada segundo");
}, 1000);

// Para detener el intervalo:
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

/* 
*** fetch API ***

La fetch API es una interfaz para realizar solicitudes HTTP.
*/

async function fetchData4() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData4();

/* 
*** Manejando errores ***

Es fundamental manejar errores en operaciones asíncronas para asegurar la robustez de la aplicación.
*/

fetchData4()
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

async function getData4() {
  try {
    const data = await fetchData4();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData4();
