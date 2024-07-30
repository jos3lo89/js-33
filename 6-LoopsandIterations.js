/* Declaración for */
for (let i = 0; i < 5; i++) {
  console.log(`for iteración -> ${i}`);
}

/* Declaración do...while */

let n = 1;

do {
  console.log(`do..while iteración -> ${n}`);
  n = n + 1;
} while (n <= 5);

/* Declaración while */
n = 1;

while (n <= 5) {
  console.log(`while iteración -> ${n}`);
  n = n + 1;
}

/* Declaración labeled */

let z = 5;

for (let j = 0; j < 10; j++) {
  console.log(`Breack iteracion -> ${j}`);
  if (j === 3) {
    console.log("j = 3 cerrar bucle");
    break;
  }
}

for (let k = 0; k < 5; k++) {
  console.log(`Continue iteracion -> ${k}`);
  if (k === 2) {
    console.log("k = 2 continua con el bucle");
    continue;
  }
}

/* Declaración for...in */

const user = {
  name: "jose luis",
  lastName: "galindo cardenas",
  age: 23,
};

for (key in user) {
  console.log(`clave -> ${key}`);
}

const arr = [3, 5, 7];

for (let i in arr) {
  console.log(i);
}
