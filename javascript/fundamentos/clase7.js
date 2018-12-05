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
