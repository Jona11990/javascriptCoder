const prendas = [
    { nombre: "Remera", precioPorTalle: { s: 500, l: 700, xl: 950 }, colores: ["blanco", "negro", "azul", "rojo"], talles: ["s", "m", "l", "xl"] },
    { nombre: "Camisa", precioPorTalle: { s: 800, l: 1100, xl: 1500 }, colores: ["blanco", "negro", "azul", "rojo"], talles: ["s", "m", "l", "xl"] },
    { nombre: "Pantalón", precioPorTalle: { s: 1200, l: 1400, xl: 1800 }, colores: ["blanco", "negro", "azul", "rojo"], talles: ["s", "m", "l", "xl"] },
    { nombre: "Campera", precioPorTalle: { s: 1500, l: 1700, xl: 2100 }, colores: ["blanco", "negro", "azul", "rojo"], talles: ["s", "m", "l", "xl"] }
  ];
  
  const rangosDePrecio = [
    { nombre: "Menos de $500", min: 1, max: 500 },
    { nombre: "Menos de $1000", min: 501, max: 1000 },
    { nombre: "Menos de $2000", min: 1001, max: 2000 },
    { nombre: "Menos de $3000", min: 2001, max: 3000 }
  ];
  
  
  function obtenerRangoPorPrecio(precio) {
    return rangosDePrecio.find(rango => precio >= rango.min && precio <= rango.max);
  }
  
  let precioDeseado = parseInt(prompt("Ingrese el monto deseado a gastar por prenda"));
  
  if (isNaN(precioDeseado) || precioDeseado <= 499) {
    alert("Monto inválido. Por favor, ingrese un número mayor a 500.");
  } else {
    const rangoElegido = obtenerRangoPorPrecio(precioDeseado);
  
    if (!rangoElegido) {
      alert("No se encontró un rango válido para el monto ingresado.");
    } else {
      let opcionesDisponibles = prendas.filter(prenda => {
        const preciosPorTalle = Object.values(prenda.precioPorTalle);
        return preciosPorTalle.some(precio => precio >= rangoElegido.min && precio <= rangoElegido.max);
      });
  
      if (opcionesDisponibles.length === 0) {
        alert(`Lo sentimos, no hay opciones de prendas disponibles dentro del rango de precio ${rangoElegido.nombre}.`);
      } else {
        let prendaElegida = parseInt(prompt("Seleccione una prenda:\n" + opcionesDisponibles.map((prenda, index) => `${index + 1}. ${prenda.nombre}`).join("\n")));
  
        if (isNaN(prendaElegida) || prendaElegida <= 0 || prendaElegida > opcionesDisponibles.length) {
          alert("Opción inválida. Por favor, elija una opción válida.");
        } else {
          prendaElegida--;
  
          const prendaSeleccionada = opcionesDisponibles[prendaElegida];
  
          let talleElegido = prompt(`Seleccione un talle (${prendaSeleccionada.talles.join(", ")}):`).toLowerCase();
          while (!prendaSeleccionada.talles.includes(talleElegido)) {
            talleElegido = prompt(`Talle inválido. Seleccione un talle válido (${prendaSeleccionada.talles.join(", ")}):`).toLowerCase();
          }
  
          let colorElegido = prompt(`Seleccione un color (${prendaSeleccionada.colores.join(", ")}):`).toLowerCase();
          while (!prendaSeleccionada.colores.includes(colorElegido)) {
            colorElegido = prompt(`Color inválido. Seleccione un color válido (${prendaSeleccionada.colores.join(", ")}):`).toLowerCase();
          }
  
          const cantidadComprar = parseInt(prompt("Ingrese la cantidad de prendas a comprar:"));
  
          if (isNaN(cantidadComprar) || cantidadComprar <= 0) {
            alert("Cantidad inválida. Por favor, ingrese un número mayor a 0.");
          } else {
            const precioFinal = prendaSeleccionada.precioPorTalle[talleElegido] * cantidadComprar;
            alert(`El precio total de ${cantidadComprar} ${prendaSeleccionada.nombre}(s) en talle ${talleElegido} y color ${colorElegido} es: $${precioFinal.toFixed(2)}`);
          }
        }
      }
    }
  }
  
  
  
  
  
  


  