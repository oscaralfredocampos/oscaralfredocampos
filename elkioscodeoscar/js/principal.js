const hamburgersa = document.querySelector('.hamburgersa');
const navMenu = document.querySelector('.nav-menu');

hamburgersa.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 15 },
    { id: 3, nombre: 'Producto 3', precio: 20 },
    { id: 4, nombre: 'Producto 4', precio: 12 },
    { id: 5, nombre: 'Producto 5', precio: 8 },
    { id: 6, nombre: 'Producto 6', precio: 30 },
    { id: 7, nombre: 'Producto 7', precio: 25 },
    { id: 8, nombre: 'Producto 8', precio: 18 },
    { id: 9, nombre: 'Producto 9', precio: 22 },
    { id: 10, nombre: 'Producto 10', precio: 11 }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarProductos() {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        `;
        contenedor.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} agregado al carrito.`);
}

document.getElementById('imprimir').addEventListener('click', () => {
    let total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    let ticket = 'Ticket:\n\n';
    carrito.forEach(prod => {
        ticket += `${prod.nombre} - $${prod.precio}\n`;
    });
    ticket += `\nTotal: $${total}`;
    alert(ticket);
});

mostrarProductos();
