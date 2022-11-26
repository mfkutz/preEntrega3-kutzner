const productosEnLocalStorage = JSON.parse(localStorage.getItem("producto-agregado"));
const containerDeProductos = document.getElementById("contenedor-pr");
const tituloCategoria = document.getElementById("titulo-categoria");
const cantidadProductos = document.getElementById("numero");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".boton-agregar");
let carrito;

function cargaDeProductos(categoriaElegida) {
    //"refresco"
    containerDeProductos.innerHTML = "";
    //armo estructura html y lo recorro con un foreach 
    categoriaElegida.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="imagen-prod" src="${producto.imagen}" alt="">
            <div class="detalles-prod">
            <h3 class="titulo-prod">${producto.titulo}</h3>
            <p class="precio-prod">$ ${producto.precio}</p>
            <button class="boton-agregar" id="${producto.id}">Agregar al carrito</button>
            </div>
            `;
        //imprimo en dom
        containerDeProductos.append(div);
    });
    //actualizo botones agregar en cada carga
    llamarBotonesAgregar()
}
cargaDeProductos(productos);
botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id != "todos") {
            const selecTitulo = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloCategoria.innerText = selecTitulo.categoria.nombre;
            /*  console.log(selecTitulo); */
            const productosCat = productos.filter((producto) => producto.categoria.id === e.currentTarget.id);
            cargaDeProductos(productosCat);
        } else {
            tituloCategoria.innerText = "Todos los productos";
            cargaDeProductos(productos);
        }
    })
})
function llamarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".boton-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarACarrito);
    })
}
//funcion para actualizar el numero de productos en carrito
function actualizaValorNumero(){
    let actualizarNumeroCarrito = carrito.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
    cantidadProductos.innerText = actualizarNumeroCarrito;   
}
if(productosEnLocalStorage){
    carrito = productosEnLocalStorage;
    actualizaValorNumero()
}else{
    carrito = [];
}
function agregarACarrito(e) {
    //asigno a cada boton segun id
    const botonId = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === botonId);
    if (carrito.some((producto) => producto.id === botonId)) {
        const cantidadRep = carrito.findIndex((producto) => producto.id === botonId);
        carrito[cantidadRep].cantidad++;
    } else {
        carrito.push(productoAgregado);
    }
    //actualiza el numero de productos en el carrito
    actualizaValorNumero()
    //agrega el producto en el LS
    localStorage.setItem("producto-agregado", JSON.stringify(carrito));
    Swal.fire({
        /* position: 'top-end', */
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1600
      })
}

