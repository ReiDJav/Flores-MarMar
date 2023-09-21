let Titulo = document.title;

window.addEventListener('blur', () => {
    Titulo = document.title;
    document.title = "No te vallas, regresa :(";
})

window.addEventListener('focus', () => {
    document.title = Titulo;
})

document.getElementById("BotonCerrar").addEventListener('click', function() {
  // Ocultar la sección de bienvenida
  document.querySelector(".Contenedor-Binicio").style.display = "none";

  // Mostrar la sección del texto
  document.querySelector(".Texto").style.display = "block";
  
  // Mostrar la flor ocultada estableciendo su propiedad display en "block"
  document.querySelector(".flower-container").style.display = "block";

  // Reproduce la canción
  miCancion.play();

});
