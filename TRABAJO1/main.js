const tasasInteres = [1.07, 1.15, 1.23, 1.32, 1.40, 1.48];

function calcularIntereses(inversion, meses) {
  let nuevoPrecios = [];

  for (let i = 0; i < meses; i++) {
    nuevoPrecios.push(inversion * tasasInteres[i]);
  }

  return nuevoPrecios;
}

let inversion = parseInt(prompt("Ingrese el monto a invertir"));
let meses = parseInt(prompt("Ingrese la cantidad de meses"));

if (isNaN(inversion) || inversion <= 0) {
  alert("El monto de inversión ingresado no es válido. Por favor, ingrese un número mayor a 0.");
} else if (meses >= 1 && meses <= tasasInteres.length) {
  const nuevoPrecios = calcularIntereses(inversion, meses);

  for (let i = 0; i < nuevoPrecios.length; i++) {
    alert(`Mes ${i + 1}: su capital final será de $${nuevoPrecios[i].toFixed(2)}`);
  }
} else if (meses >= 7) {
  alert("Debido a la inestabilidad económica, solo se permite hasta 6 meses.");
} else {
  alert("El número de meses ingresado no es válido. Por favor, ingrese un número entre 1 y " + tasasInteres.length);
}

