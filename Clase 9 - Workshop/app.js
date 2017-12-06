// Módulo con toda nuestra lógica de datos
var toDoList = (function() {
  var listaTareas = []

  function cargarTarea(nombreTarea) {
    // Genero el objeto para una nueva tarea
    var nuevaTarea = {
      id: faker.random.uuid(),
      titulo: nombreTarea,
      completado: false,
    }

    // Agrego la nueva tarea al final del array
    listaTareas.push(nuevaTarea)

    // Lo muestro por pantalla en forma de tabla
    console.table(listaTareas)

    // Devuelvo el id de la nueva tarea
    return nuevaTarea.id
  }

  function editarTarea(idBuscado, nuevoTitulo) {
    // Recorremos toda la lista de tareas
    for (var i = 0; i < listaTareas.length; i++) {
      var tarea = listaTareas[i]

      // Buscamos alguna tarea que tenga un id igual al id buscado
      if (tarea.id === idBuscado) {
        // Si la encontramos le asignamos el nuevo titulo
        tarea.titulo = nuevoTitulo
      }
    }

    console.table(listaTareas)
  }

  function completarTarea(idBuscado) {
    // Recorremos toda la lista de tareas
    for (var i = 0; i < listaTareas.length; i++) {
      var tarea = listaTareas[i]

      // Buscamos alguna tarea que tenga un id igual al id buscado
      if (tarea.id === idBuscado) {
        // Si la encontramos le asignamos el valor booleano contrario al que tenia
        tarea.completado = !tarea.completado
      }
    }

    console.table(listaTareas)
  }

  function eliminarTarea(idBuscado) {
    for (var i = 0; i < listaTareas.length; i++) {
      var tarea = listaTareas[i]

      // Buscamos alguna tarea que tenga un id igual al id buscado
      if (tarea.id === idBuscado) {
        // Si la encontramos eliminamos esa tarea una sola vez
        listaTareas.splice(i, 1)
      }
    }

    console.table(listaTareas)
  }

  return {
    cargarTarea: cargarTarea,
    editarTarea: editarTarea,
    completarTarea: completarTarea,
    eliminarTarea: eliminarTarea,
  }
})()

// UI - Lógica de la interfaz
var form = document.querySelector('form')
var textInput = document.querySelector('input#todo')
var ul = document.querySelector('ul.list-group')

// Form
form.addEventListener('submit', function(event) {
  // Prevenimos el comportamiento por defecto que se recargue el navegador
  event.preventDefault()

  // Obtenemos el valor del input
  var nombreTarea = textInput.value
  // Lo cargamos a nuestra lista de tareas
  var id = toDoList.cargarTarea(nombreTarea)
  // Limpiamos el input
  textInput.value = ''

  // Agregamos un <li> más con la nueva tarea
  ul.innerHTML += `
  <li id=${id}  
      class="d-flex justify-content-between list-group-item"
    >
    <p class="nombre-tarea" contenteditable>${nombreTarea}</p>
    <div>
      <button type="button" class="btn fa fa-check" aria-label="Check"></button>    
      <button type="button" class="btn fa fa-times" aria-label="Close"></button>
    </div>
  </li>`

  // Hacemos que todas las listas sean interactivas
  makeLiInteractive()
})

function makeLiInteractive() {
  var liItems = document.querySelectorAll('li.list-group-item')
  var checkButtons = document.querySelectorAll('button.fa-check')
  var closeButtons = document.querySelectorAll('button.fa-times')

  // Edición
  for (var i = 0; i < liItems.length; i++) {
    liItems[i].addEventListener('keyup', function() {
      // Cada vez que presionemos una tecla sacamos el texto que tenga el li
      var nuevoNombreTarea = this.querySelector('p').textContent
      // Sacamos el ID del item que acaba de ser tecleado
      var id = this.getAttribute('id')

      // Editamos la tarea recién tecleada pasandole el id y el nuevo nombre de la tarea
      toDoList.editarTarea(id, nuevoNombreTarea)
    })
  }

  // Completar tarea
  for (var i = 0; i < checkButtons.length; i++) {
    checkButtons[i].addEventListener('click', function() {
      // Toggleamos la clase "active", es decir agregamos o  eliminamos la clase "active"
      var li = this.parentNode.parentNode
      li.classList.toggle('active')

      // Obtenemos el ID del item que acaba de ser clickeado
      var id = li.getAttribute('id')
      // Ponemos el booleano de la tarea en true o false según el estado en el que se encuentre
      toDoList.completarTarea(id)
    })
  }

  // Eliminar tarea
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
      // Obtenemos el li subiendo 2 padres hacia arriba
      var li = this.parentNode.parentNode

      // Obtenemos el ID del item que acaba de ser clickeado
      var id = li.getAttribute('id')

      // Eliminamos la tarea que acaba de ser clickeada en la lista de tareas
      toDoList.eliminarTarea(id)

      // Eliminamos del ul el li
      ul.removeChild(li)
    })
  }
}
