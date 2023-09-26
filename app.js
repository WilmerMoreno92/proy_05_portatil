require('colors')

const functions_texto = require('./proy_modules/functions_texto.js')

const main = async() => {
    
 console.log (functions_texto.nombreCompleto("WiLMer","MOREno").red );



}

let nombreAprendiz = 'WilMEr';
let apellidoAprendiz = 'moREno';

let nombreCompleto = nombreAprendiz[0].toUpperCase() + nombreAprendiz.substring(1).toLowerCase() + " " +
     apellidoAprendiz[0].toUpperCase() + apellidoAprendiz.substring(1).toLowerCase();  

console.log(nombreCompleto);

let i = nombreCompleto.length;

while (i > 0) {
    console.log( i + ' ' + nombreCompleto.substring(0,i)); i--;
}



main();