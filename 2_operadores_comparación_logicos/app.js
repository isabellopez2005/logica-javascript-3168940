//Boolean(...)

console.log('"5==5"', "5" == "5")//true
console.log('"5===5"', "5" === "5")//true
console.log(' 5 === "5"', 5 === "5")//false
console.log(' 5 == 5"', 5 == "5")//true
console.log(' 5 === (3+2) ', "5" === (3+2))//false
console.log(' 5 === 5 ', 5 === 5 )  //true  

//Concatenar (+)

console.log(5 + "3" )//53
console.log
console.log(5* "3" )//15
console.log(5 + 3 )//8

//Pida dos números al usuario y sumelos
let num1 = Number (prompt('Dame num 1'))// "5"
let num2 = Number (prompt ('Dame num 2') )// "7"
let resultado = num1 + num2
alert("El resultado de tu suma es " + resultado )

//Pedir dos numeros con prompt
let valorA = Number(prompt("Ingresa el valor A:"));
let valorB = Number(prompt("Ingresa el valor B:"));

alert(El valor A es = "${valorA}" y el valor B es = "${valorB}".);

alert(La suma de "${valorA}" + "${valorB}" = "${valorA + valorB}");
alert(La resta de "${valorB}" - "${valorA}" = "${valorB - valorA}");
alert(La multiplicación de "${valorA}" * "${valorB}" = "${valorA * valorB}");
alert(La división de "${valorA}" / "${valorB}" = "${valorB !== 0 ? (valorA / valorB) : 'indefinida (división por 0)'}");