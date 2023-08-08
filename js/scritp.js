 // Obtener los elementos de radio buttons
 const cartonDobleRadio = document.getElementById('carton_doble');
 const cartonSencilloRadio = document.getElementById('carton_sencillo');

 // Función para deseleccionar las opciones después de un minuto
 function deseleccionarOpcion() {
     cartonDobleRadio.checked = false;
     cartonSencilloRadio.checked = false;
 }

 // Event listener para detectar cambios en las opciones
 cartonDobleRadio.addEventListener('change', () => {
     // Reiniciar el temporizador si se cambia la opción antes de que se cumpla el minuto
     clearTimeout(window.temporizador);
     // Establecer un nuevo temporizador para deseleccionar la opción después de un minuto
     window.temporizador = setTimeout(deseleccionarOpcion, 60000);
 });

 cartonSencilloRadio.addEventListener('change', () => {
     // Reiniciar el temporizador si se cambia la opción antes de que se cumpla el minuto
     clearTimeout(window.temporizador);
     // Establecer un nuevo temporizador para deseleccionar la opción después de un minuto
     window.temporizador = setTimeout(deseleccionarOpcion, 60000);
 });