class persona {
   constructor(nombre, apellido, altura) {
   this.nombre = nombre
   this.apellido =apellido
   this.altura = altura
   }

   saludar(fn) {
      console.log(`hola!, me llamo ${this.nombre} ${this.apellido}`)
      if(fn) {
         fn (this.nombre, this.apellido)
      }
   }

   esAlta() {
      console.log(`${this.nombre} ${this.altura >= 1.8 ? 'es una persona' : 'no es una persona'} alta`)
   }
}

class desarrollador extends persona {
   
   saludar(fn) {
      console.log(`hola!, me llamo ${this.nombre} ${this.apellido}, y soy desarrolador`)
      if(fn) {
         fn (this.nombre, this.apellido, true)
      }
   }
}

function respoderSaludo(nombre, apellido, esDev) {
   console.log(`Buen Día, ${nombre} ${apellido}`)
   if (esDev) {
      console.log(`que bueno!, eres desarrollador`)
   }
}

var jhull = new desarrollador('Jhull', 'Rondon', 1.88)
var melissa =  new persona('Melissa', 'Fabian', 1.51)
var cole = new persona('Nelson', 'Villafranca', 1.70)
