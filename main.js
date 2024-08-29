// Función para calcular el precio final con impuestos y descuentos
function calcularPrecioFinal(precioBase, descuento, impuesto) {
    let precioConDescuento = precioBase;

    
    if (descuento > 0) {
        precioConDescuento = precioBase - (precioBase * (descuento / 100));
    }

    let precioFinal = precioConDescuento + (precioConDescuento * (impuesto / 100));

    return precioFinal.toFixed(2); // Redondear a dos decimales
}

alert("¡Bienvenido a la Tienda de Ropa Indimoon!");

let precioBase = parseFloat(prompt("Ingresa el precio base de la prenda (en pesos):"));
let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento (si no hay, ingresa 0):"));
let impuesto = 21; // Suponiendo un impuesto fijo del 21%

let precioFinal = calcularPrecioFinal(precioBase, descuento, impuesto);

// Mostrar resultado al usuario
alert("El precio final de la prenda con impuestos y descuentos aplicados es: $" + precioFinal);
