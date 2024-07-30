/* if...else */

const a = 5;

if (a > 10) {
  console.log("a > 5 -> Es mayor");
} else if (a < 10) {
  console.log("a < 5 -> Es menor");
} else {
  console.log("a == 5 -> Es igual");
}

/* switch */

const b = 1;

switch (b) {
  case 1:
    console.log("caso 1");
    break;
  case 2:
    console.log("caso 2");
    break;
  default:
    console.log("por defecto");
    break;
}

/* throw statement */

try {
  throw new Error("Error creado");
} catch (e) {
  console.log(`Error  -> ${e.message}`);
}

/* try / catch / finally */

try {
  throw new Error("Error 2 con finally");
} catch (err) {
  console.log(`Error 2 -> ${err.message}`);
} finally {
  console.log("Finally se ejecuta si o si");
}
