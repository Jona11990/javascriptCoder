const calcularButton = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");

calcularButton.addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const monto = parseFloat(document.getElementById("monto").value);
  const plazo = parseInt(document.getElementById("plazo").value);

  if (!nombre || !apellido) {
    resultadoDiv.innerHTML = "Por favor, ingrese su nombre y apellido.";
  } else if (isNaN(monto) || isNaN(plazo) || monto <= 0 || plazo <= 0) {
    resultadoDiv.innerHTML = "Por favor, ingrese montos y plazos válidos.";
  } else {
    const tasaInteres = 0.1; // Tasa de interés fija (ejemplo)
    const cuotaMensual = (monto * tasaInteres) / (1 - Math.pow(1 + tasaInteres, -plazo));

    // Crear un objeto para almacenar los datos
    const datosUsuario = {
      nombre: nombre,
      apellido: apellido,
      cuotaMensual: cuotaMensual.toFixed(2)
    };

    // Convertir el objeto a una cadena JSON
    const datosJSON = JSON.stringify(datosUsuario);

    // Almacenar los datos en localStorage
    localStorage.setItem("datosUsuario", datosJSON);

    resultadoDiv.innerHTML = `Hola ${nombre} ${apellido}, la cuota mensual es: $${cuotaMensual.toFixed(2)}. Los datos se han almacenado.`;
  }
});

