// Cargar productos desde JSON
fetch("../data/datos.json")
    .then(res => res.json())
    .then(productos => {
        mostrarProductos(productos);
        mostrarProductosPagina(productos);
    })
    .catch(err => console.log("Error cargando JSON:", err));

/* Mostrar productos destacados en index */
function mostrarProductos(productos) {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    productos.slice(0, 2).forEach(p => {
        contenedor.innerHTML += `
            <div class="tarjeta">
                <img src="${p.imagen}">
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <p><strong>${p.precio}</strong></p>
            </div>
        `;
    });
}

/* Mostrar todos los productos en escritorio.html */
function mostrarProductosPagina(productos) {
    const lista = document.getElementById("lista-productos");
    if (!lista) return;

    productos.forEach(p => {
        lista.innerHTML += `
            <div class="tarjeta">
                <img src="${p.imagen}">
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <p><strong>${p.precio}</strong></p>
            </div>
        `;
    });
}
