/*  

EJERCICIO N°1

jQuery Baby!!

Empecemos a reconocer los selectores de jQuery con un pequeño ejercicio:
- Importar la libreria de jquery*/


//- Agregar la clase "pod" a todos los li
var $li = $("li")
$li.addClass("pod")
//- Agregar la clase Simpson al h1 y a los h2 de cada pod
var $simpsonClase = $(".pod h1", ".pod h2")
$simpsonClase.addClass("Simpson")


//- Agregar a Maggie al final de la lista (append, prepend)
var $ul = $("ul.list.personajes")
$ul.append(`<li class="pod">
		<h2>Maggie</h2>
		<img src="img/maggie.png">
		<p class="description">
			Margaret Evelyn "Maggie" Simpson es un personaje ficticio de la serie de televisión de dibujos animados Los Simpson. Es la tercera hija del matrimonio protagonista, Homer y Marge Simpson, y la más joven de ellos. Sus hermanos mayores son Bart y Lisa Simpson. Siempre se la ve succionando un chupete y cuando camina, suele tropezar con el mono y cae de frente.
		</p>							
	</li>`)
	

// Mover a bart a la primera posicion de la lista
var $bart = $("ul li:nth-child(3)")
$ul.prepend($bart)
//$('#Bart').appendTo('#Bart1');

//- Ocultar los personajes cuando hacemos click en ellos.
var $img = $("li img")

$img.click(function(e) {
	var container = e.target
	$(container).fadeOut()
	
});
