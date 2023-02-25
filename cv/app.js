
const boton1 = document.querySelector("#boton1");

// Seleccionar los elementos de información
const info1 = document.querySelector(".info:nth-of-type(1)");

// Agregar eventos de clic a los botones
boton1.addEventListener("click", (hide) => {
	info1.style.display = "block";
});

window.onload = function() {
    var icon = document.createElement("div");
    icon.setAttribute("id", "html-icon");
    document.body.appendChild(icon);
  }

  