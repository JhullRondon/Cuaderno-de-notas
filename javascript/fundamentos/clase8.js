var jhull = {
   nombre: 'Jhull',
   apellido: 'Rondon',
   edad: 29,
   ingeniero: false,
   cocinero: true
}


function profesion(persona){
   if (persona.ingeniero){
      console.log(`${persona.nombre} ${persona.apellido} es ingeniero`)
   }else {
      console.log(`${persona.nombre} ${persona.apellido} no es ingeniero`)
   }

}

//para escribir funciones de flecha
// cuando los parametros que le pasamos a la ArrowFunction se puede obviar los parentesis
// const mayorEdad = persona => persona.edad >= 18
const mayorEdad = ({ edad }) => edad >= 18

function printAge(persona) {
      if (mayorEdad(persona)) {
         console.log(`${persona.nombre} es mayor de edad`)
      }
}

printAge(jhull)