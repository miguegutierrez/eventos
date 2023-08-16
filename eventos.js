//referencias al div y al botón
const div = document.getElementById("miDiv");
const boton = document.getElementById("botonSaludar");

//manejador de click para el botón
boton.addEventListener('click', (event) => {

    event.stopPropagation();

    alert('Hola!');
});

//manejador de click para el div
div.addEventListener('click', () => {

    alert('Hola!, Soy el div');
});
