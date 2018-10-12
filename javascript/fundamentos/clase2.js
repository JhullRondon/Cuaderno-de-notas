var nombre = 'Jhull', apellido = 'Rondon'

var changeMayusculas = nombre.toUpperCase()
var changeMinusculas = apellido.toLowerCase()
var firstLetter = nombre.charAt(0)
var wordLength = nombre.length

//var fullName = nombre + ' ' + apellido
//interpolacion de texto usando `` (comillas invertidas)
/* se usa el simbolo ${VARIABLE} para llamar valores de
variables dentro de un string*/
// dentro de las llaves podemos escribir codigo JS
var fullName = `${nombre} ${apellido.toUpperCase()}`


// para acceder a un string dentro de un string
// .substr(posision inicial, posicion final)
var str = nombre.substr(1, 3)

