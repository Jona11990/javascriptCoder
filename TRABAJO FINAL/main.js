
document.addEventListener("DOMContentLoaded", function () {
  const calcularButton = document.getElementById("calcular");
  const resultadoDiv = document.getElementById("resultado");

  calcularButton.addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const numeroCuit = document.getElementById("numeroCuit").value;
    const email = document.getElementById("email").value; 
    const monto = parseFloat(document.getElementById("monto").value);
    const plazo = parseInt(document.getElementById("plazo").value);

    if (!nombre || !apellido || !numeroCuit || !email) { 
      resultadoDiv.innerHTML = "Por favor, complete todos los campos.";
    } else if (isNaN(monto) || isNaN(plazo) || monto <= 0 || plazo <= 0) {
      resultadoDiv.innerHTML = "Por favor, ingrese montos y plazos válidos.";
    } else {
      const tasaInteres = 0.1; // Tasa de interés fija
      const cuotaMensual = (monto * tasaInteres) / (1 - Math.pow(1 + tasaInteres, -plazo));

      const datosUsuario = {
        nombre: nombre,
        apellido: apellido,
        numeroCuit: numeroCuit,
        email: email,
        cuotaMensual: cuotaMensual.toFixed(2),
      };

      
      cargarDatosDesdeJSON()
        .then((datos) => {
          // Combinar los datos cargados con los datos del usuario
          const datosCombinados = { ...datos, ...datosUsuario };
          return almacenarDatos(datosCombinados); // Almacenar datos combinados
        })
        .then(() => {
          
          resultadoDiv.innerHTML = `Hola ${nombre} ${apellido}, la cuota mensual es: $${cuotaMensual.toFixed(2)}. Los datos se han almacenado. Le enviamos los requisitos para realizar el préstamo a ${email}, ¡desde ya muchas gracias!`;
        })
        .catch((error) => {
          console.error("Error al cargar o almacenar datos:", error);
        });
    }
  });

  
document.getElementById("borrar").addEventListener("click", function () {
  resultadoDiv.innerHTML = ""; // Borrar el contenido de resultadoDiv
  
  // Restablecer los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("numeroCuit").value = "";
  document.getElementById("email").value = "";
  document.getElementById("monto").value = "";
  document.getElementById("plazo").value = "";
});


  // Función para cargar datos desde un archivo JSON local
  function cargarDatosDesdeJSON() {
    return fetch('datos.json') 
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error al cargar el archivo JSON:', error);
        throw error; 
      });
  }

  
  function almacenarDatos(datos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        resolve();
      }, 1000);
    });
  }
});



