
function printAge(persona) {
   console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años`)
}

// para invocar en una funcion solo ciertos atributos de un objeto usamos la siguiente definicion
function printAge2({ nombre }) {
   console.log(`${nombre} es lo mejor!`)
}

/*para declarar variables que provienen de un objeto en una forma mas sencilla*/

function printName(persona) {
   var { nombre } = persona
   console.log(nombre)
}



/*dentro de un objeto encontramos los llamados Claves(key): valor(value)
separados por comas(,)*/
var jhull = {
   nombre: 'Jhull',
   apellido: 'Rondon',
   edad: 28
}

var melissa = {
   nombre: 'Melissa',
   apellido: 'Fabian',
   edad: 25
}

printAge(jhull)
printAge(melissa)

