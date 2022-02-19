// Botones de acciones
let accionPaginaUno = document.getElementById("btn01");
let accionPaginaDos = document.getElementById("btn02");

// Referencias de páginas
let pagina01 = document.getElementById("pagina01");
let pagina02 = document.getElementById("pagina02");

// Funciones
accionPaginaUno.addEventListener('click', () => {
    pagina01.style.display = "none";
    pagina02.style.display = "block";
});

accionPaginaDos.addEventListener('click', () => {
    pagina01.style.display = "block";
    pagina02.style.display = "none";
});