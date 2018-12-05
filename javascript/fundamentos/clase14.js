const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTS =  { crossDomain: true }
// const onResponse = function (luke) {
//   console.log(`hola yo soy, ${luke.name}`)
// }

const onPeopleResponse = (persona) => console.log(`hola, yo soy ${persona.name}`)

function obtenerPersonaje (id) {
   return new Promise((resolve, reject) => {
      const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
      $
         .get(URL, OPTS, data => resolve(data))
         .fail(() => reject(id))

   })
}

function onError(id) {
   console.log(`susedio un error al obtener el personaje ${id}`)
}

// con esta aplicacion del async-await aseguramos que se realicen
// todas las promesas antes de seguir el codigo
async function getCharacter() {
   var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   var promesas = ids.map( id => obtenerPersonaje(id)) // crea una matriz donde el primer indice es el id y el segundo es el objeto traido
   try {
      var Characters = await Promise.all(promesas)
      console.table(Characters)
   } catch (id) {
      onError(id)
   }
}
getCharacter()


/* trabajar multiples promesas sin async-await 

Promise.all(promesas)
   .then( personaje => {
      for (let i = 0; i < personaje.length; i++) {
         console.log(`hola yo soy, ${personaje[i].name}`)
         
      }
   })
   .catch( onError )
 */


/* 
cantPersona = 9
for (i=1;i<=cantPersona;i++) { 

   obtenerPersonaje(i)
   .then(personaje => {
      console.log(`hola yo soy, ${personaje.name} personaje numero: ${i}`)
   })
   .catch(onError)
}
 */
