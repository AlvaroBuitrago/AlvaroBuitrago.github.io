document.addEventListener("DOMContentLoaded", () => {
   let contador = 0; // Variable para contar los clics

   // Obtenemos el botón y el párrafo donde se mostrará el contador
   const boton = document.getElementById("contadorBoton");
   const texto = document.getElementById("contadorTexto");

   // Agregamos un evento al botón para incrementar el contador
   boton.addEventListener("click", () => {
       contador++;
       texto.textContent = `Clics: ${contador}`;
   });
});
