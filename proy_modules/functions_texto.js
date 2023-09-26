const functions_texto = {};

function nombreCompleto(nombre, apellido) {

    return nombreCompleto = nombre [0].toUpperCase() + nombre.substring(1).toLowerCase()
         + " " + apellido [0]. toUpperCase() + apellido.substring(1).toLowerCase();

}
functions_texto.nombreCompleto = nombreCompleto;


module.exports = functions_texto