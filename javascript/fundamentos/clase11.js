class persona {
   constructor(nombre, apellido, altura) {
   this.nombre = nombre
   this.apellido =apellido
   this.altura = altura
   }

   saludar() {
      console.log(`hola!, me llamo ${this.nombre} ${this.apellido}`)
   }

   esAlta() {
      console.log(`${this.nombre} ${this.altura >= 1.8 ? 'es una persona' : 'no es una persona'} alta`)
   }
}

class desarrolador extends persona {
   
   saludar() {
      console.log(`hola!, me llamo ${this.nombre} ${this.apellido}, y soy desarrolador`)
   }
}

var jhull = new persona('Jhull', 'Rondon', 1.88)
var melissa =  new persona('Melissa', 'Fabian', 1.51)
var cole = new persona('Nelson', 'Villafranca', 1.70)
