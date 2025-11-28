fetch("../data/productos.json")
    .then(res => res.json())
    .then(data => mostrarProductos(data));

function mostrarProductos(productos) {
    const contenedor = document.getElementById("contenedor-productos");
    productos.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <strong>${p.precio}</strong>
        `;
        contenedor.appendChild(card);
    });
}

