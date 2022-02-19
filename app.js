// Referencias de páginas
let pantallaBienvenida = document.getElementById("pantallaBienvenida");
let pantallaFormulario = document.getElementById("pantallaFormulario");
let pantallaListado = document.getElementById("pantallaListado");
let pantallaDetalle = document.getElementById("pantallaDetalle");
let formTitulo = document.getElementById("formTitulo");
let formCategoria = document.getElementById("formCategoria");
let formNotas = document.getElementById("formNotas");
let formAgregar = document.getElementById("formAgregar");
let listado = document.getElementById("listado");


let agregarItem = document.getElementById("agregarItem");

agregarItem.addEventListener( 'click', () => {
    pantallaBienvenida.style.display = "none";
    pantallaFormulario.style.display = "block";
});

let mostrarListado = () => {
    pantallaFormulario.style.display = "none";
    pantallaListado.style.display = "block";
}

let mostrarDetalle = () => {
    pantallaListado.style.display = "none";
    pantallaDetalle.style.display = "block";
}

formAgregar.addEventListener( 'click', () => {
    let categoria = formCategoria.value;
    let titulo = formTitulo.value;
    let notas = formNotas.value;
    let modelo = `<li class="list-group-item">
    <img src="images/${categoria}.png" alt="">
    <p>${titulo}</p>
    <button onclick="mostrarDetalle()">
        <img src="images/flecha.png" alt="">
    </button>
</li>`;

    if( categoria != "categorias" && titulo != "" && notas != "") {
        listado.innerHTML += modelo;
        formCategoria.value = "";
        formTitulo.value = "";
        formNotas.value = "";
        console.log("Item cargado: ", categoria, ' ', titulo, ' ', notas);
        mostrarListado();
    } else {
        alert("COMPLETAR LOS DATOS!");
    }
    
})