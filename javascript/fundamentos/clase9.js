var contador = 0

const LLUEVE =  () => Math.random() < 0.25

do {
   contador++   
} while (!LLUEVE())
var FRECUENCIA = contador == 1 ? "vez": "veces"

console.log(`fui a ver si llovia ${contador} ${FRECUENCIA = contador == 1 ? "vez": "veces"}`)