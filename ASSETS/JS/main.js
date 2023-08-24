const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".categoria-btn"); 
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")


//Cartas de productos
function cargarProductos(productosMostrar) {
    contenedorProductos.innerHTML = "";

    productosMostrar.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.foto}" alt="${producto.nombre}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}


// Cargar todos los productos al inicio
cargarProductos(productos);


// Agregar event listeners a los botones de categoría
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoriaSeleccionada = boton.id;
        if (categoriaSeleccionada === "todos") {
            cargarProductos(productos); 
        } else {
            const productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);
            cargarProductos(productosFiltrados);
        }
    });
});


cargarProductos(productos);

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarCarrito);
    });
}


let productosCarrito;
const productosCarritoLS = localStorage.getItem("productos-en-carrito");
if(productosCarritoLS){
     productosCarrito = JSON.parse(productosCarritoLS);
     actualizarNumerito();
} else{
    productosCarrito = [];
}


//funcion para que se agreguen los productos al carrito
function agregarCarrito(e) {

    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosCarrito.some(producto => producto.id === idBoton)) {
        const indice = productosCarrito.findIndex(producto => producto.id === idBoton);
        productosCarrito[indice].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosCarrito.push(productoAgregado);
    }
    

    actualizarNumerito();
    console.log(productosCarrito);
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito))
    mostrarNotificacion();
}


//funcion para que muestre en el icono del carrito cuantos productos hay
function actualizarNumerito() {
    let nuevoNumerito = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

function mostrarNotificacion(producto) {
    Toastify({
        text: `El producto se ha agregado  al carrito.`,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'right',
        backgroundColor: 'linear-gradient(to right, #557e9e,#d2cfb0)',
        stopOnFocus: true,
        offset: {
            x: 150, 
            y: 110 
        },
    }).showToast();
}
