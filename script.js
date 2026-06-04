function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const grid = modal.querySelector('.products-grid');
    
    if (grid && MIS_PRODUCTOS[modalId]) {
        grid.innerHTML = ""; // Limpiar contenido previo

        MIS_PRODUCTOS[modalId].forEach(producto => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-img-box">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="product-info">
                    <h3>${producto.nombre}</h3>
                    <p class="product-desc">${producto.descripcion}</p>
                    <div class="product-meta">
                        <span class="product-price">$${producto.precio}</span>
                        <a href="https://wa.me/59898808548?text=Hola!%20Me%20interesa%20el%20producto:%20${encodeURIComponent(producto.nombre)}" 
                           target="_blank" class="buy-btn">
                           <i class="fab fa-whatsapp"></i> Consultar
                        </a>
                    </div>
                </div>
            `;
            grid.appendChild(productCard);
        });
    }

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
