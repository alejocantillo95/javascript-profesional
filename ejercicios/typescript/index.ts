// Funciones
// function add(a: number, b: number): number {
//   return a + b;
// }

// const sum = add(4, 6);

// function createAdder(a: number): (number) => number {
//   return function(b: number) {
//     return b + a;
//   };
// }

// const addFour = createAdder(4);
// const fourPlus6 = addFour(6);

// function fullName(firstName: string, lastName: string = 'Smith'): string {
//   return `${firstName} ${lastName}`;
// }

// const alejandro = fullName('Agente');
// console.log(alejandro);

// Interfaces
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
}

interface Rectangulo {
  ancho: number
  alto: number
  color?: Color
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Rojo,
}

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());