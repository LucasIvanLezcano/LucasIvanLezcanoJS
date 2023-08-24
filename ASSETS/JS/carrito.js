let productosCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));


console.log(productosCarrito);                


const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-comprar");
const formulario = document.querySelector('#formulario');



function cargarProductosCarrito(){
    if (productosCarrito && productosCarrito.length > 0){


        formulario.classList.remove("disabled")
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        
        
        
        
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.foto}" alt="${producto.nombre}">
                    <div class="carrito-producto-titulo">
                        <h3>${producto.nombre}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p>${producto.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>$${producto.precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>$${producto.precio * producto.cantidad}</p>
                    </div>
                    <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            
            `;
            
            contenedorCarritoProductos.append(div);
        })
        actualizarBotonesEliminar();
        actualizarTotal();
    
    }else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        
    }

    
}


cargarProductosCarrito();



function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarProdCarrito);
    });
}
//funcion para eliminar productos del carrito
function eliminarProdCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosCarrito.findIndex(producto => producto.id === idBoton);

    productosCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
}

//funciones para  vaciar el carrito
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    productosCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
    cargarProductosCarrito(); 
    formulario.classList.add("disabled");
}



function actualizarTotal() {
    const totalCalculado = productosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}



botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
    if (!formularioEnviado){
        mostrarNotificacionFormulario();
        return;
    }

    productosCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
    Toastify({
        text: "Gracias por tu compra! Recibirás el pedido en los proximos dos dias habiles.",
        duration: 2000,
        gravity: 'top',
        position: 'right',
        close: true,
        style: {
            background: "linear-gradient(to right, #557e9e,#d2cfb0)",
        },
        offset: {
            x: 150, 
            y: 110 
        },
    }).showToast();



    cargarProductosCarrito();
    formulario.classList.add("disabled");
    
}

function mostrarNotificacionFormulario() {
    Toastify({
        text: 'No puedes completar la compra sin llenar el formulario.',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        backgroundColor: 'red',
        close: true,
        offset: {
            x: 150, 
            y: 110 
        },
    }).showToast();
}



//form




const nombreInput = document.querySelector('#nombre');
let formularioEnviado = false;

// Función para validar nombre y apellido (solo letras y espacios)
function validarNombreApellido(texto) {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(texto);
}


function validarAltura(altura) {
    return Number.isInteger(parseInt(altura)) && parseInt(altura) > 0;
}


const nombreRegex = /^[A-Za-z\s]+$/; 

nombreInput.addEventListener('input', () => {
    if (!nombreRegex.test(nombreInput.value)) {
        nombreInput.setCustomValidity('El nombre solo debe contener letras y espacios');
    } else {
        nombreInput.setCustomValidity('');
    }
});


function enviarDatosAlServidor(datos) {
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            if (datos) {
                resolve({ mensaje: 'Datos recibidos con éxito' });
            } else {
                reject(new Error('Error en el servidor'));
            }
        }, 1000);
    });
}

nombreInput.addEventListener('input', () => {
    if (!nombreRegex.test(nombreInput.value)) {
        nombreInput.setCustomValidity('El nombre solo debe contener letras y espacios');
    } else {
        nombreInput.setCustomValidity('');
    }
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formulario.checkValidity()) {
        const nombre = nombreInput.value;
        const apellido = document.querySelector('#apellido').value;
        const localidad = document.querySelector('#localidad').value;
        const calle = document.querySelector('#calle').value;
        const altura = document.querySelector('#altura').value;

        if (!validarNombreApellido(nombre) || !validarNombreApellido(apellido)) {
            console.error('Nombre y apellido deben contener solo letras y espacios');
            return;
        }

        if (!validarAltura(altura)) {
            console.error('Altura debe ser un número entero positivo');
            return;
        }

        const datosCliente = {
            nombre: nombre,
            apellido: apellido,
            localidad: localidad,
            calle: calle,
            altura: parseInt(altura)
        };

        enviarDatosAlServidor(datosCliente)
            .then(data => {
                console.log(data.mensaje);
                mostrarNotificacionFormularioExitoso(); 
                formularioEnviado = true;
            })
            .catch(error => {
                console.error('Error en el envío de datos', error);
            });
    }
});



function mostrarNotificacionFormularioExitoso() {
    Toastify({
        text: 'Formulario enviado con éxito. ¡Gracias por tu compra!',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        backgroundColor: 'green',
        close: true,
        offset: {
            x: 150, 
            y: 110 
        },
    }).showToast();
}