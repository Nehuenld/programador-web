/* 
  👨🏼‍🏫 Profesor: Leonardo Galante -> https://leonardogalante.com

  📕 Carrera Front-end: Nivel 2 Programador Web

  🏎 Inicio: Miércoles 25 de Octubre 

  🏁 Fin: Miércoles 3 de Enero

  📅 Días y Horarios: Lúnes y Miércoles de 18:30hs a 22:00hs 

  🚻 Baños al fondo, al lado de las escaleras

  ☕️ Recreo: 15 minutos a las 20:15hs y hay café, agua caliente, galletitas.

  🏢 Lugar: Urban Station - Didi Soho - Sala Auditorio - Honduras 4762 (40min, salir máx 17:30hs)

  ✅ ToDo: 
      * Presentarnos
      * Tomar asistencia
      * Validación Slack (soporte@coderhouse.com)
      * Completar encuestas a las 21:45hs (10min antes)
      * Requisitos para el certificado: 80% de asistencia
      * Plataforma https://plataforma.coderhouse.com
      * Sala de Chat (Slack), canal #curso2610 https://developershouse.slack.com
      * Devolución de TPs por GitHub y Plataforma
      * Organizar bien la sala, proyector y sillas
      * Podemos pedir zapatillas/snacks en recepción si hace falta

  🛠 Herramientas:
      * Visual Studio Code
      * Prettier (Plugin)

  👌 Slides Introducción a JavaScript: https://intro-js.now.sh

  📄 Documentación de JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript
          
  📶 Wi-Fi: Nombre -> "AreaTres Soho" - Contraseña: "somoscreadores"
              
*/

// 🦔 1. Obtener la longitud y latitud del usuario https://ipapi.co/json (AJAX) o API Nativa de geolocalizacion
// 🦔 3. Insertar los datos en el DOM, efectos y más!

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)

  var lat = position.coords.latitude
  var lon = position.coords.longitude
  var key = "c529f6c807f74d1be698d0fd508e5a62"

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`,
    success: function(data) {
      console.log(data)
    }
  })

})

// 🦔 2. Obtener la temperatura de http://openweathermap.org/current pasandole como parametros la lat y lon (AJAX)
