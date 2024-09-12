// Array of products
const productos = [
    { id: 1, nombre: "Camisa de verano", precio: 19.99 },
    { id: 2, nombre: "Pantalón de jeans", precio: 29.99 },
    { id: 3, nombre: "Sombrero", precio: 15.00 },
];

// Variables
let carrito = [];
const impuestoFijo = 21;

// Function to add a product to the cart
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        carrito.push(producto);
        console.log(`${producto.nombre} agregado al carrito.`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Function to calculate the total cart value with discount and tax
function calcularTotalCarrito(descuento) {
    let subtotal = carrito.reduce((total, producto) => total + producto.precio, 0);
    let totalConDescuento = subtotal;

    if (descuento > 0) {
        totalConDescuento = subtotal - (subtotal * (descuento / 100));
    }
    let totalConImpuestos = totalConDescuento + (totalConDescuento * (impuestoFijo / 100));
    return totalConImpuestos.toFixed(2); 
}

// Function to display the cart contents
function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        carrito.forEach(producto => {
            console.log(`- ${producto.nombre}: $${producto.precio}`);
        });
        console.log(`Total con impuestos: $${calcularTotalCarrito(0)}`); 
    }
}

// Main function to interact with the user
function interactuarConUsuario() {
    alert("¡Bienvenido a la Tienda de Ropa Indimoon!");

    let continuar = true;

    while (continuar) {
        let idProducto = parseInt(prompt("Ingresa el ID del producto (1: Camisa, 2: Pantalón, 3: Sombrero) o 0 para salir:"));
        if (idProducto === 0) break;

        agregarAlCarrito(idProducto);
        mostrarCarrito();

        let aplicarDescuento = confirm("¿Deseas aplicar un descuento en el carrito?");
        let descuento = 0;
        if (aplicarDescuento) {
            descuento = parseFloat(prompt("Ingresa el porcentaje de descuento (si no hay, ingresa 0):"));
        }

        alert(`El total a pagar con impuestos y descuentos aplicados es: $${calcularTotalCarrito(descuento)}`);

        continuar = confirm("¿Deseas agregar otro producto?");
    }

    alert("¡Gracias por usar la Tienda de Ropa Indimoon!");
}

interactuarConUsuario();