// Precios de los pasteles
const precios = {
    snoopy: 35000,
    zanahoria: 30000,
    naranja: 20000,
    redvelvet: 20000,
    Fresa: 22000,
    Chocomenta: 25000
};

// Carrito y total
let carrito = [];
let total = 0;

function agregarAlCarrito() {
    // Obtener cantidades de cada pastel
    const cantidadSnoopy = parseInt(document.getElementById("snoopy").value);
    const cantidadZanahoria = parseInt(document.getElementById("zanahoria").value);
    const cantidadNaranja = parseInt(document.getElementById("naranja").value);
    const cantidadRedVelvet = parseInt(document.getElementById("redvelvet").value);
    const cantidadFresas = parseInt(document.getElementById("Fresa").value);
    const cantidadChocomenta = parseInt(document.getElementById("Chocomenta").value);

    // Vaciar el carrito actual
    carrito = [];
    total = 0;

    // Agregar pasteles seleccionados al carrito
    if (cantidadSnoopy > 0) {
        carrito.push({ nombre: "Snoopy Cake", cantidad: cantidadSnoopy, precio: precios.snoopy });
        total += cantidadSnoopy * precios.snoopy;
    }
    if (cantidadZanahoria > 0) {
        carrito.push({ nombre: "Pastel de Zanahoria", cantidad: cantidadZanahoria, precio: precios.zanahoria });
        total += cantidadZanahoria * precios.zanahoria;
    }
    if (cantidadNaranja > 0) {
        carrito.push({ nombre: "Pastel de Naranja", cantidad: cantidadNaranja, precio: precios.naranja });
        total += cantidadNaranja * precios.naranja;
    }
    if (cantidadRedVelvet > 0) {
        carrito.push({ nombre: "Pastel de Red Velvet", cantidad: cantidadRedVelvet, precio: precios.redvelvet });
        total += cantidadRedVelvet * precios.redvelvet;
    }
    if (cantidadFresas > 0) {
        carrito.push({ nombre: "Pastel de Fresas", cantidad: cantidadFresas, precio: precios.Fresa });
        total += cantidadFresas * precios.Fresa;
    }
    if (cantidadChocomenta > 0) {
        carrito.push({ nombre: "Pastel Chocomenta", cantidad: cantidadChocomenta, precio: precios.Chocomenta });
        total += cantidadChocomenta * precios.Chocomenta;
    }

    // Actualizar el carrito y el total
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${item.cantidad} x ${item.nombre} - $${(item.cantidad * item.precio)}`;
        carritoElement.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function solicitarPedido() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Por favor, agrega pasteles.");
        return;
    }

    let pedido = "Tu pedido:\n";
    carrito.forEach(item => {
        pedido += `${item.cantidad} x ${item.nombre} - $${(item.cantidad * item.precio)}\n`;
    });
    pedido += `Total: $${total}`;
    alert(pedido);
}

function limpiarCarrito() {
    document.getElementById("snoopy").value = 0;
    document.getElementById("zanahoria").value = 0;
    document.getElementById("naranja").value = 0;
    document.getElementById("redvelvet").value = 0;
    document.getElementById("Fresa").value = 0;
    document.getElementById("Chocomenta").value = 0;

    carrito = [];
    total = 0;
    actualizarCarrito();
}
