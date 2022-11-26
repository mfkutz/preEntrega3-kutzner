//llamo todo lo que se va a usar en dom
const productosEnLS = JSON.parse(localStorage.getItem("producto-agregado"));
const carroVacioImg = document.querySelector(".carro-vacio-imagen");
const contenedorVacio = document.getElementById("carrito-vacio");
const contenedorProductosEnCarrit = document.getElementById("productos-en-carrito");
const contenedorAcciones = document.getElementById("acciones");
const contenedorComprado = document.getElementById("carrito-comprado");
const cantidadProductos = document.getElementById("numero");
let botonesEliminar = document.querySelectorAll("producto-carrito-eliminar");
const vaciarCarrito = document.getElementById("carrito-acciones-vaciar");
const sumaTotal = document.getElementById("total");
const comprar = document.getElementById("comprar");
//traigo del storage y hago un reduce sobre la cantidad de productos, luego imprimo en dom
function actualizaValorNumero() {
    let carrito = JSON.parse(localStorage.getItem("producto-agregado"));
    let actualizarNumeroCarrito = carrito.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
    cantidadProductos.innerText = actualizarNumeroCarrito;
}
//funcion general para cargar productos
function cargarProductosCarrito() {
    if (productosEnLS && productosEnLS.length > 0) {
        //"reseteo" contenedor para realizar una actualizacion constante
        contenedorProductosEnCarrit.innerHTML = '';
        //modifico dom segun necesitad
        carroVacioImg.classList.add("disabled");
        contenedorProductosEnCarrit.classList.remove("disabled");
        contenedorComprado.classList.add("disabled");
        contenedorAcciones.classList.remove("disabled");
        contenedorVacio.classList.add("disabled");
        //hago un forEach por cada producto
        productosEnLS.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto-en-carrito");
            div.innerHTML = `
        <img class="producto-carrito-imagen" src="${producto.imagen}" alt="">
             <div class="producto-carrito-titulo">
                <small>Producto</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="producto-carrito-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
             </div>
             <div class="producto-carrito-precio">
                <small>Precio</small>
                <p>$ ${producto.precio}</p>
             </div>
             <div class="producto-carrito-subtotal">
                <small>Subtotal</small>
                <p>$ ${producto.precio * producto.cantidad}</p>
            </div>
        <button class="producto-carrito-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
        `;
            //imprimo en dom el div.innerHTML creado
            contenedorProductosEnCarrit.append(div);
        })
        //actualiza numero de productos en carrito
        actualizaValorNumero()

    } else {
        carroVacioImg.classList.remove("disabled");
        contenedorVacio.classList.remove("disabled");
        contenedorProductosEnCarrit.classList.add("disabled");
        contenedorAcciones.classList.add("disabled");
        contenedorComprado.classList.add("disabled");
    }
    actualizarTotal()
    actualizarBotonesEliminar()
}
//carga productos cada vez que hay un "refresco" de pagina
cargarProductosCarrito()
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".producto-carrito-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}
//funcion para eliminar producto del carrito
function eliminarDelCarrito(e) {
    const botonId = e.currentTarget.id;
    const elimDeIndex = productosEnLS.findIndex((producto) => producto.id === botonId);
    productosEnLS.splice(elimDeIndex, 1);
    cargarProductosCarrito();
    localStorage.setItem("producto-agregado", JSON.stringify(productosEnLS))
    actualizaValorNumero()
}
//vacia el carrito usando sweetalert
vaciarCarrito.addEventListener("click", () => {
    Swal.fire({
        title: 'Desea vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Vaciar'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnLS.length = 0;
            localStorage.setItem("producto-agregado", JSON.stringify(productosEnLS))
            actualizaValorNumero()
            cargarProductosCarrito()
          Swal.fire(
            'Carrito vaciado!',
            'Puedes seguir agregando productos',
            'success'            
          )
        }
      })
});
//"reduce" en LS de los precios por la cantidad, luego imprime en dom
function actualizarTotal() {
    const sumarTotal = productosEnLS.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    sumaTotal.innerText = `$ ${sumarTotal}`;
}
comprar.addEventListener("click", () => {
    Swal.fire({
        title: 'Desea finalizar la compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#1ec000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnLS.length = 0;
            localStorage.setItem("producto-agregado", JSON.stringify(productosEnLS));
            contenedorVacio.classList.remove("disabled");
            contenedorProductosEnCarrit.classList.add("disabled");
            contenedorAcciones.classList.add("disabled");
            carroVacioImg.classList.remove("disabled");
            actualizaValorNumero()
          Swal.fire(
            'Gracias por su compra !',
            'Puedes ir a la tienda a seguir comprando :)',
            'success'        
          )
        }
      })
})