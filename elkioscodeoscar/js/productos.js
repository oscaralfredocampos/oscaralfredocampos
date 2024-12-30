const productos = [
    { id: 1, nombre: "Coca Cola", precio: 25 },
    { id: 2, nombre: "Galletas", precio: 15 },
    { id: 3, nombre: "Chocolates", precio: 20 },
    { id: 4, nombre: "7UP", precio: 20 },
];

const productosDiv = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalSpan = document.getElementById("total");
const ticketDiv = document.getElementById("ticket");
const contenidoTicket = document.getElementById("contenido-ticket");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = 0;

function mostrarProductos() {
    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.className = "producto";
        productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
            <button onclick="sacarDelCarrito(${producto.id})">Quitar-</button>
        `;
        productosDiv.appendChild(productoDiv);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}
function sacarDelCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.pop(producto);
        actualizarCarrito();
    }
}
function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    total = 0;
    carrito.forEach(producto => {
        const itemCarrito = document.createElement("li");
        itemCarrito.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(itemCarrito);
        total += producto.precio;
    });
    totalSpan.textContent = total;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function generarTicket() {
    contenidoTicket.innerHTML = "<h3>Ticket Factura </h3>";
    carrito.forEach(producto => {
        contenidoTicket.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
    });
    contenidoTicket.innerHTML += `<p><strong>Total: $${total}</strong></p>`;
    ticketDiv.style.display = "block";
}

function imprimirTicket() {
    window.print();
}

function cerrarTicket() {
    ticketDiv.style.display = "none";
}

mostrarProductos();
actualizarCarrito();