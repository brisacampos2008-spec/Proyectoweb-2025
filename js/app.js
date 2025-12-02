document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/productos.json")
    .then(res => res.json())
    .then(data => {
        const contenedor = document.getElementById("lista-productos");

        data.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <strong>$${producto.precio}</strong>
            `;

            contenedor.appendChild(div);
        });
    });
});
