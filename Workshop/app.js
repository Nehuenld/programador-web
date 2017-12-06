var toDoList = (function () {
    var listaTareas =[]

    var input = document.querySelector('form > input')
    var boton = document.querySelector('form > button')
    var form = document.querySelector('form')
    var boton$2 = document.querySelector("table > textarea")

    form.addEventListener('submit', function (event) {
        event.preventDefault()
    })

    boton.addEventListener('click', function () {
        var nombreTarea = input.value
        agregarTarea(nombreTarea)
        input.value = ''
    })

    function agregarTarea(nombre) {
        listaTareas.push({ nombre: nombre, completada: false })
        mostrarTarea()
    }

    function mostrarTarea() {
        var lista = document.querySelector('.lista')
        lista.innerHTML="";
        for (var i = 0; i < listaTareas.length; i++) {
            //console.log(listaTareas[i])
            lista.innerHTML += `<tr>${listaTareas[i].nombre}</tr>`
        }
        var tareas = document.querySelectorAll('tr')
        for (var i = 0; i < tareas.length; i++) {
            tareas[i].addEventListener('click', function () {
                this.style.textDecoration = 'line-through'
            })
        }
    }
    

   /* function editarTarea() {
        var lista = document.querySelectorAll('.lista');
        lista.?("tr")
        for (var i of list) {
            i.remove = true;
            tareas[i].addEventListener('click', function () {
                lista.remove("tr")
            })
        }
    }*/

    
    
    return {
        agregarTarea: agregarTarea,
        listaTareas: listaTareas,
    }
})()
