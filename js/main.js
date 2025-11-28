let rutaJSON = "";

if (location.pathname.includes("page")) {
    rutaJSON = "../data/datos.json";
} else {
    rutaJSON = "data/datos.json";
}

// Cargar productos
fetch(rutaJSON)
    .then(res => res.json())
    .then(productos => {
        mostrarProductos(productos);
        mostrarProductosPagina(productos);
    })
    .catch(err => console.log("Error cargando JSON:", err));

function mostrarProductos(productos) {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    productos.slice(0, 3).forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <p><strong>${p.precio}</strong></p>
        `;
        contenedor.appendChild(tarjeta);
    });
}

function mostrarProductosPagina(productos) {
    const lista = document.getElementById("lista-productos");
    if (!lista) return;

    productos.forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <p><strong>${p.precio}</strong></p>
        `;
        lista.appendChild(tarjeta);
    });
}

