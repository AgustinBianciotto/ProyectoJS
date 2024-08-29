// Función para calcular el precio final con impuestos y descuentos
function calcularPrecioFinal(precioBase, descuento, impuesto) {
    // Validar que el precio base es un número positivo
    if (isNaN(precioBase) || precioBase <= 0) {
        alert("El precio base debe ser un número positivo.");
        return;
    }

    // Validar que el descuento es un número no negativo
    if (isNaN(descuento) || descuento < 0) {
        alert("El porcentaje de descuento debe ser un número positivo o cero.");
        return;
    }

    // Validar que el impuesto es un número no negativo
    if (isNaN(impuesto) || impuesto < 0) {
        alert("El porcentaje de impuesto debe ser un número positivo o cero.");
        return;
    }

    let precioConDescuento = precioBase;

    // Aplicar descuento
    if (descuento > 0) {
        precioConDescuento = precioBase - (precioBase * (descuento / 100));
    }

    // Aplicar impuesto
    let precioFinal = precioConDescuento + (precioConDescuento * (impuesto / 100));

    return precioFinal.toFixed(2); // Redondear a dos decimales
}

// Función principal para interactuar con el usuario
function interactuarConUsuario() {
    alert("¡Bienvenido a la Tienda de Ropa Indimoon!");

    let continuar = true;

    while (continuar) {
        // Pedir el precio base de la prenda
        let precioBase = parseFloat(prompt("Ingresa el precio base de la prenda (en pesos):"));

        // Pedir el porcentaje de descuento
        let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento (si no hay, ingresa 0):"));

        // Suponiendo un impuesto fijo del 21%
        let impuesto = 21;

        // Calcular precio final
        let precioFinal = calcularPrecioFinal(precioBase, descuento, impuesto);

        if (precioFinal !== undefined) {
            // Mostrar resultado al usuario
            alert("El precio final de la prenda con impuestos y descuentos aplicados es: $" + precioFinal);
        }

        // Preguntar si el usuario desea realizar otro cálculo
        continuar = confirm("¿Deseas calcular el precio final de otra prenda?");
    }

    alert("¡Gracias por usar la Tienda de Ropa Indimoon!");
}

// Ejecutar la función principal
interactuarConUsuario();
