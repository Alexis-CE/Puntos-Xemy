const productos = [
    { name: "Mascarillas Kawaii", puntos: 15, imagen1: "./assets/mascarillas.jpeg",  url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text&type=phone_number&app_absent=0" },
    { name: "Toallitas Desmaquillantes", puntos: 25, imagen1: "./assets/toallitas.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text&type=phone_number&app_absent=0" },
    { name: "Pasta Dental", puntos: 35, imagen1: "./assets/pasta.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text&type=phone_number&app_absent=0" },
    { name: "Cepillo y Fibra para Trastes", puntos: 45, imagen1: "./assets/cepillo.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text&type=phone_number&app_absent=0" },
    { name: "Jabon de Tocador para Baño y Manos", puntos: 55, imagen1: "./assets/jabon.jpg", imagen2: "./assets/sacate.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text&type=phone_number&app_absent=0" },
    { name: "Aromatizante para tu hogar", puntos: 65, imagen1: "./assets/pinol.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text&type=phone_number&app_absent=0" },
    { name: "1 Kilo de azucar", puntos: 75, imagen1: "./assets/azucar.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text&type=phone_number&app_absent=0" },
    { name: "Cesto de basura", puntos: 85, imagen1: "./assets/cesto.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text&type=phone_number&app_absent=0" },
    { name: "Termo o Topper para guardar comida", puntos: 100, imagen1: "./assets/termo.jpg", imagen2: "./assets/toper.jpg", url: "https://api.whatsapp.com/send/?phone=%2B525562023303&text&type=phone_number&app_absent=0" },
    
];


const productosList = document.getElementById("lista-productos");
productos.forEach((producto, index) => {
    const productElement = document.createElement("div");
    productElement.classList.add("productos");
    productElement.innerHTML = `
        <img src="${producto.imagen1}" alt="${producto.name}" class="imagen" />
        <img src="${producto.imagen2}"  <!-- SOLO PARA PRODUCTOS QUE TENGAN 2 -->
        <h3>${producto.name}</h3>
        <p>${producto.puntos} puntos</p>
        <button class="botonwp" onclick="window.location.href='${producto.url}'">Canjear Producto</button>
    `;
    
    productosList.appendChild(productElement);
});

