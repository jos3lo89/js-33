/* 
*********** Declaración de una Clase Básica ***********
Una clase en JavaScript se declara usando la palabra clave `class`.
*/
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona("Juan", 30);
persona1.saludar(); // Hola, mi nombre es Juan y tengo 30 años.

/* 
*********** Herencia ***********
La herencia permite crear una clase derivada que hereda las propiedades y métodos de otra clase.
*/
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }

  ladrar() {
    console.log(`${this.nombre} ladra.`);
  }
}

const perro1 = new Perro("Rex", "Labrador");
perro1.hacerSonido(); // Rex hace un sonido.
perro1.ladrar(); // Rex ladra.

/* 
*********** Métodos Estáticos ***********
Los métodos estáticos se definen en la clase y no están disponibles en las instancias de la clase.
*/
class Matematica {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Matematica.sumar(5, 3)); // 8

/* 
*********** Campos Públicos y Privados ***********
Los campos públicos son accesibles desde cualquier lugar, mientras que los campos privados solo son accesibles dentro de la clase.
*/
class Contador {
  #contador = 0; // Campo privado

  incrementar() {
    this.#contador++;
    console.log(this.#contador);
  }
}

const contador1 = new Contador();
contador1.incrementar(); // 1
contador1.incrementar(); // 2
// contador1.#contador; // Error: no se puede acceder al campo privado

/* 
*********** Getters y Setters ***********
Los getters y setters permiten definir métodos para obtener y establecer valores de propiedades de una clase.
*/
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  get area() {
    return this.calcularArea();
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

const rectangulo1 = new Rectangulo(10, 5);
console.log(rectangulo1.area); // 50

/* 
*********** Clases Abstractas (simulación) ***********
JavaScript no soporta clases abstractas directamente, pero se pueden simular mediante la creación de una clase que no se pueda instanciar.
*/
class Forma {
  constructor() {
    if (this.constructor === Forma) {
      throw new Error("No se puede instanciar una clase abstracta.");
    }
  }

  calcularArea() {
    throw new Error("Método 'calcularArea' debe ser implementado.");
  }
}

class Circulo extends Forma {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }
}

const circulo1 = new Circulo(5);
console.log(circulo1.calcularArea()); // 78.53981633974483
// const forma1 = new Forma(); // Error: No se puede instanciar una clase abstracta.

/* 
*********** Interfaces (simulación) ***********
JavaScript no tiene interfaces de manera nativa, pero se pueden simular usando clases abstractas o funciones.
*/
class Interface {
  metodo() {
    throw new Error("Método 'metodo' debe ser implementado.");
  }
}

class Implementacion extends Interface {
  metodo() {
    console.log("Método implementado.");
  }
}

const obj = new Implementacion();
obj.metodo(); // Método implementado.

/* 
*********** Mixins ***********
Los mixins permiten agregar métodos a una clase desde otro objeto.
*/
const mixin = {
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

Object.assign(Persona.prototype, mixin);

const persona2 = new Persona("Juan");
persona1.saludar(); // Hola, mi nombre es Juan

/* 
*********** Decoradores (Experimental) ***********
Los decoradores son una característica experimental que permite modificar el comportamiento de las clases y sus miembros.
*/
function decorador(target, key, descriptor) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`Método ${key} fue llamado con argumentos: ${args}`);
    return metodoOriginal.apply(this, args);
  };
  return descriptor;
}

class Ejemplo {
  @decorador
  metodo(a, b) {
    return a + b;
  }
}

const ejemplo = new Ejemplo();
console.log(ejemplo.metodo(2, 3)); // Método metodo fue llamado con argumentos: 2,3 \n 5

/* 
*********** Polimorfismo ***********
El polimorfismo permite usar una interfaz común para clases que implementan métodos de forma diferente.

*/
class Animal {
  hacerSonido() {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Ladrido");
  }
}

class Gato extends Animal {
  hacerSonido() {
    console.log("Maullido");
  }
}

const animales = [new Animal(), new Perro(), new Gato()];
animales.forEach((animal) => animal.hacerSonido());
// Sonido genérico
// Ladrido
// Maullido

/* 
*********** Composición ***********
La composición permite construir clases complejas a partir de otras clases.
*/
class Motor {
  encender() {
    console.log("Motor encendido");
  }
}

class Ventanas {
  abrir() {
    console.log("Ventanas abiertas");
  }
}

class Coche {
  constructor() {
    this.motor = new Motor();
    this.ventanas = new Ventanas();
  }

  arrancar() {
    this.motor.encender();
    this.ventanas.abrir();
    console.log("Coche en marcha");
  }
}

const coche = new Coche();
coche.arrancar();
// Motor encendido
// Ventanas abiertas
// Coche en marcha
