const productos = document.querySelectorAll('.producto');
const listaSeleccionados = document.getElementById('lista-seleccionados');
let seleccionados = [];

productos.forEach(producto => {
    producto.addEventListener('click', () => {
        const id = producto.dataset.id;
        const nombre = producto.querySelector('h3').textContent;

        if (producto.classList.contains('seleccionado')) {
            // Deseleccionar
            producto.classList.remove('seleccionado');
            seleccionados = seleccionados.filter(item => item.id !== id);
        } else {
            // Seleccionar
            producto.classList.add('seleccionado');
            seleccionados.push({ id, nombre });
        }

        actualizarListaSeleccionados();
    });
});

function actualizarListaSeleccionados() {
    listaSeleccionados.innerHTML = ''; // Limpia la lista

    seleccionados.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.nombre;
        listaSeleccionados.appendChild(li);
    });
}