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
/*esta funcion retorna un nuevo objeto con los mismos valores
   que el objeto de referencia pero sin modificar el original
   este nuevo objeto puede ser guardado en una nueva variable o no*/
function birthday(persona) {
   return {
      ...persona, 
      edad: persona.edad + 1
   }
}
