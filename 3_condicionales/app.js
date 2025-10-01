let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));

// Verificar si puede ingresar a la discoteca
if (edad >= 18) {
  alert(nombre + " puede ingresar a la discoteca.");
} else {
  alert(nombre + " no puede ingresar a la discoteca.");
}

// Verificar si puede ingresar a zona VIP
if (nombre === "mario" || nombre === "carlos") {
  alert(" puede ingresar a la zona VIP.");
}

let estatura = parseInt(prompt("Ingrese su estatura en cm:"));
let velocidad = parseInt(prompt("Ingrese su velocidad en km/h:"));

if (estatura >= 170 && velocidad >= 27) {
  alert("Cumples con los requisitos para ingresar al equipo.");

  if (edad < 15) {
    alert("Serás asignado a las divisiones menores.");
  } else {
    alert("Serás asignado al equipo profesional.");
  }

} else {
  alert("No cumples con los requisitos para ingresar al equipo.");
}