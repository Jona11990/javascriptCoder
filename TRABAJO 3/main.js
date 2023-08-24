const calcularButton = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");

calcularButton.addEventListener("click", function() {
  const monto = parseFloat(document.getElementById("monto").value);
  const plazo = parseInt(document.getElementById("plazo").value);

  if (isNaN(monto) || isNaN(plazo) || monto <= 0 || plazo <= 0) {
    resultadoDiv.innerHTML = "Por favor, ingrese montos y plazos válidos.";
  } else {
    const tasaInteres = 0.1; // Tasa de interés fija (ejemplo)
    const cuotaMensual = (monto * tasaInteres) / (1 - Math.pow(1 + tasaInteres, -plazo));

    resultadoDiv.innerHTML = `La cuota mensual es: $${cuotaMensual.toFixed(2)}`;
  }
});
