const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTS =  { crossDomain: true }
// const onResponse = function (luke) {
//   console.log(`hola yo soy, ${luke.name}`)
// }

const onPeopleResponse = (persona) => console.log(`hola, yo soy ${persona.name}`)

function obtenerPersonaje(id, callback) {
   const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
   $.get(URL, OPTS, function (luke) {
      console.log(`hola yo soy, ${luke.name}`)
   })
   if (callback) {
      callback()
   }
}


obtenerPersonaje(1, function () {
   obtenerPersonaje(2, function() {
      obtenerPersonaje(3, function () {
         obtenerPersonaje(4, function() {
            obtenerPersonaje(5, function () {
               obtenerPersonaje(6)
            })
         })
      })
   })
})


