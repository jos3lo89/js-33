/* ******************* Colecciones con clave ******************* */

const frutas = new Map();

frutas.set("Naranja", "amargo");
frutas.set("uva", "dulce");
frutas.set("limon", "acido");

console.log(frutas.size); // 3

console.log(`${frutas.has("limon") ? "Si hay limon" : " No hay limon"}`);

console.log(
  `${
    frutas.delete("Naranja")
      ? "Naranja eliminado"
      : "no se pudo elminar la naranja"
  }`
);

for (const [key, value] of frutas) {
  console.log(`* ${key} -> ${value}`);
}

frutas.clear();

console.log(frutas.size); // 0

/* ******************* JSON ******************* */
const todos = require("./4-1-json.json");

console.log("----------------------------------------");
console.log(todos);
console.log("----------------------------------------");

const user = {
  name: "jose luis",
  lastName: "galimdo cardenmas",
  age: 23,
};

let myStringObj = JSON.stringify(user);
console.log("json string ->", myStringObj);

let MyObjJson = JSON.parse(myStringObj);
console.log("json string parseado ->", MyObjJson);
