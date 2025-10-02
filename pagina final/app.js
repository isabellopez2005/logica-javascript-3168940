// Mostrar Biografía
function mostrarBio() {
  let bio = "Rafael Orozco Maestre (1954-1992) fue un cantante vallenato colombiano, cofundador del Binomio de Oro y una de las voces más queridas del género.";
  document.getElementById("bio-texto").innerText = bio;
}

// Canciones (arrays y ciclos)
let canciones = ["Solo para ti", "La creciente", "Relicario de besos", "Momentos de amor"];
let lista = document.getElementById("canciones");
canciones.forEach((cancion, i) => {
  let li = document.createElement("li");
  li.textContent = (i+1) + ". " + cancion;
  lista.appendChild(li);
});

// Galería Lightbox
function abrirLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("imagen-grande").src = img.src;
}
function cerrarLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Validación formulario
function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || mensaje === "") {
    alert("Por favor completa todos los campos.");
    return false;
  }
  alert("Gracias " + nombre + ", tu mensaje fue enviado.");
  return true;
}
