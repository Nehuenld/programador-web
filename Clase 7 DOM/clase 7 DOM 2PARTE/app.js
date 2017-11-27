// 👩‍🚒 1. Crear elementos con document.createElement()
// document.createElement() nos permite generar un elemento que querramos, por ej h1, h2, img, p, etc
var imagen = document.createElement('img')

// Una vez que lo tenemos creado por ejemplo a esta imagen le agregamos un source (atributo src)
imagen.src = 'http://40.media.tumblr.com/718e3f59126e9b2f4c043ec780433803/tumblr_n8rsrsERoB1tgmvjco1_1280.jpg'

// 👩‍🚒 2. Appendear (agregar al final) a un elemento con document.appendChild()

var cajaNoticia = document.querySelector('.caja-noticia')

// Pero no lo tenemos agregado al DOM, agregamos este elemento al final o al principio de otro elemento
// usando .appendChild() pasandole como parametro el elemento recién creado
cajaNoticia.appendChild(imagen)

// + Ejemplos

var parrafo = document.createElement('p')
parrafo.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos qui blanditiis magni explicabo! Accusamus nulla repellendus id qui impedit, exercitationem, facilis consequatur quidem aliquid perferendis adipisci recusandae quibusdam praesentium accusantium.'

cajaNoticia.appendChild(parrafo)

// 👩‍🚒 3. Manipulando el contenido con .innerHTML

console.log(cajaNoticia.innerHTML)

cajaNoticia.innerHTML = cajaNoticia.innerHTML + '<h6>Hoola</h6>'

/* 
  👩‍🚒 5. Ejercicio: Manipulando Texto

    1. Abrí alguno de tus páginas HTML previas
    2. Mirá el textContent de un elemento en la consola.
    3. Dale al textContent de ese elemento un nuevo string.
    4. Elige otro elemento y agregale codigo HTML en su interior
    5. Mira el innerHTML de ese elemento
    6. Mira el textContent de ese mismo elemento */
//www.nehuendiaz.com
/*var services = document.querySelector("#services")
console.log(services.textContent)

Servicios
Siempre pensando en lo mejor para vos.


    E - Commerce
Logremos llevar tu empresa al futuro, el mercado online esta creciendo
y vos no te podes quedar afuera, potencia tus ventas con un comercio electronico.



Responsive Design
El 80% de vistas a paginas web, se realizan por medio de dispositivos mobiles, nosotros te ayudamos a que tu pagina sea visible para todos los dispositivos y facil de usar para que tus clientes no se aburran ni se pierdan de contenido.

Diseño Web
Html / 5 / GitHub Css3 / Sass / Bootstrap / Seo / Front - end

services.textContent = " Java Script"
" Java Script"

var portfolio = document.querySelector("#portfolio h3")

portfolio.innerHTML = "<p>lorem	ipsump la</p>"
"<p>lorem	ipsump la</p>"
console.log(porfolio.innerHTML)

portfolio.innerHTML = portfolio.innerHTML
"<p>lorem	ipsump la</p>"

portfolio.textContent
"lorem	ipsump la"

*/
/* 
  👩‍🚒 6. Ejercicio: Agregando elementos al DOM

    1. Agrega un <article> en tu HTML con la clase "noticia-nueva"
    2. Genera desde tu JavaScript una imágen y almacenala en una variable
    3. Asignale un link a la propiedad src (.src) de la imágen
    4. Crea en tu CSS una clase "img-size" con width: 200px y height: 200px
    5. Agregale la clase "img-size" a la imágen
    6. Por último ppendea esa imágen al <article> con clase "noticia-nueva"

 */
var imagenUno = document.createElement("img")
imagenUno.src = "https://i.blogs.es/a43b99/falsos-mitos-en-fotografia/840_560.jpg"

var noticiaNueva = document.querySelector(".noticiaNueva")

noticiaNueva.classList.add('img-size')

noticiaNueva.appendChild(imagenUno)