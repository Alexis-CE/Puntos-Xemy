const productos = [
    { name: "Mascarillas Kawaii", puntos: 15, imagen1: "./assets/mascarillas.jpeg",  url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text=!Hola quiero canjear las Mascarilla Kawaii!" },
    { name: "Toallitas Desmaquillantes", puntos: 25, imagen1: "./assets/toallitas.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text=!Hola quiero canjear las Toallitas Desmaquillantes!" },
    { name: "Pasta Dental", puntos: 35, imagen1: "./assets/pasta.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text=!Hola quiero canjear la Pasta Dental!" },
    { name: "Cepillo y Fibra para Trastes", puntos: 45, imagen1: "./assets/cepillo.jpg", imagen2:"./assets/sacate.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text=!Hola quiero canjear el Cepillo y Fibra para trastes!" },
    { name: "Jabon de Tocador para Baño y Manos", puntos: 55, imagen1: "./assets/jabon.jpg", imagen2: "./assets/jabon2.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text=!Hola quiero canjear el Jabon de Tocador para Baño y Manos!" },
    { name: "Aromatizante para tu hogar", puntos: 65, imagen1: "./assets/pinol.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text=!Hola quiero canjear el Aromatizante para mi hogar!" },
    { name: "1 Kilo de azucar", puntos: 75, imagen1: "./assets/azucar.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text=!Hola quiero canjear el Kilo de Azucar!" },
    { name: "Cesto de basura", puntos: 85, imagen1: "./assets/cesto.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text=!Hola quiero canjear el Cesto De Basura!" },
    { name: "Termo o Toper para guardar comida", puntos: 100, imagen1: "./assets/termo.jpg", imagen2: "./assets/toper.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text=!Hola quiero canjear el Termo o Topper para guardar comida!" },
    
];


const productosList = document.getElementById("lista-productos");
productos.forEach((producto, index) => {
    const productElement = document.createElement("div");   
    productElement.classList.add("productos");
    let html = `
        <div class="imagen-container">
            <img src="${producto.imagen1}" alt="${producto.name}" class="imagen" />
    `;
    
    if (producto.imagen2) {
        html += `<img src="${producto.imagen2}" alt="${producto.name}" class="imagen2" />`;
    }
    
    html += `</div>
        <h3>${producto.name}</h3>
        <p>${producto.puntos} puntos</p>
        <button class="botonwp" onclick="window.location.href='${producto.url}'">Canjear Producto</button>
    `;
    
    productElement.innerHTML = html;
    productosList.appendChild(productElement);
});
