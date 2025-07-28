function saludarReinita() {
  alert("Hola soy la Reinita Amarilla 🐤. ¡Vamos a cuidar la naturaleza juntos!");
}

function saludarColibri() {
  alert("Hola, soy el Colibrí garganta de rubí 🕊️. ¡Aprendamos jugando!");
}

function verificarClave() {
  const clave = document.getElementById("claveDocente").value;
  if (clave === "docente.YELA.TEC.2025") {
    document.getElementById("login").style.display = "none";
    document.getElementById("contenidoDocente").style.display = "block";
  } else {
    alert("Clave incorrecta");
  }
}
