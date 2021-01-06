/*Templates literals:
Los templates literals nos facilitan el manejo de los textos, con estos es posible usar cadenas
de caracteres de más de una línea
*/

//Ejemplo 1: 

const saludo1 = `Hola,
Mi nombre es Melissa González `

//Las expresiones sin templates literals se usan de la siguiente manera: 

const nombre = 'Melissa'
const saludo2 = 'Hola\n' + 'Mi nombre es' + nombre1

//Ahora las expresiones con templates se usan de la siguiente manera: 

const saludo3 = `Hola, Mi nombre es ${nombre}`;


/* También se usan más cosas complejas como un HTML template, y otra de las características 
que no es muy usada son los tagged templates, es decir etiquetar un template */


//ejemplo:

function userTemplate(strings, value){
    return `<p>${strings[0]}<strong>${value}</strong></p>`
}
userTemplate`username:${'Melissa'}`