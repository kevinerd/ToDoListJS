// Referencias de páginas.
let pantallaBienvenida = document.getElementById("pantallaBienvenida");
let pantallaFormulario = document.getElementById("pantallaFormulario");
let pantallaListado = document.getElementById("pantallaListado");
let pantallaDetalle = document.getElementById("pantallaDetalle");

// Referencias del detalle.
let imgDetalle = document.getElementById("imgDetalle");
let tituloDetalle = document.getElementById("tituloDetalle");
let notasDetalle = document.getElementById("notasDetalle");
let cerrarDetalle = document.getElementById("cerrarDetalle");

// Elementos del formulario.
let formItem = document.getElementById("formItem");
let formCategoria = document.getElementById("formCategoria");
let formNotas = document.getElementById("formNotas");

// Btn que envía el formulario.
let formAgregar = document.getElementById("formAgregar");

let listado = document.getElementById("listado");

// Btn Bienvenida.
let agregarItem = document.getElementById("agregarItem");

// Btn Listado.
let agregarItemListado = document.getElementById("agregarItemListado");

agregarItem.addEventListener( 'click', () => {
    pantallaBienvenida.style.display = "none";
    pantallaFormulario.style.display = "block";
});

agregarItemListado.addEventListener( 'click', () => {
    pantallaListado.style.display = "none";
    pantallaFormulario.style.display = "block";
} );

let mostrarListado = () => {
    pantallaFormulario.style.display = "none";
    pantallaListado.style.display = "block";
}

let mostrarDetalle = (item, categoria, notas) => {
    pantallaListado.style.display = "none";
    pantallaDetalle.style.display = "block";
    imgDetalle.setAttribute("src", `./images/${categoria}`);
    tituloDetalle.innerHTML = item;
    notasDetalle.innerHTML = notas;
}

formAgregar.addEventListener( 'click', () => {
    let item = formItem.value;
    let categoria = formCategoria.value;
    let notas = formNotas.value;
    let modelo = `<li class="list-group-item">
    <img src="./images/${categoria}" alt="">
    <p>${item}</p>
    <button onclick="mostrarDetalle('${item}', '${categoria}', '${notas}')">
        <img src="./images/flecha.png" alt="">
    </button>
</li>`;

    if( categoria != "Categoría..." && item != "" && notas != "") {
        listado.innerHTML += modelo;
        formCategoria.value = "";
        formItem.value = "";
        formNotas.value = "";
        mostrarListado();
    } else {
        alert("COMPLETÁ LOS DATOS, BOBO!");
    }
    
})

cerrarDetalle.addEventListener( 'click', () => {
    pantallaListado.style.display = "block";
    pantallaDetalle.style.display = "none";
} );