console.log("hola mundo")

//CONDICIONALES if / else / if else
var mensaje = "chau"

// el if nos permite ejecutar un bloque de codigo si la condicion es verdadera
if (mensaje === "hola"){
    console.log("Bienvenido")
    console.log("Esta dentro del if")
}

//else  si la condicion no se cumple se ejutara este bloque dentro deñ "else"
else{
    console.log("nos vemos en la proxima")
}

// ejemplo de 15 % de descuento

var descuentoPrincipal = 0.15;
var descuentoSecundario = 0.10;

var precioTelevisor = 6000;

if (precioTelevisor > 5000) {
    console.log("Aplicar descuento principal")
    var decuentoTelevisor = precioTelevisor * descuentoPrincipal
    var precioFinal = precioTelevisor - decuentoTelevisor
    console.log(precioFinal)
} else if (precioTelevisor > 4000){
    console.log("Aplicar descuento secundario")
    var decuentoTelevisor = precioTelevisor * descuentoSecundario
    var precioFinal = precioTelevisor - decuentoTelevisor
    console.log(precioFinal)
} else {
    console.log("disculpe no hay descuento")
}

//4 Operadores Logicos

//4.1  and (&&) (y logico)
// el operador logico AND  nos permite agregar mas de una condicion 
//pero para que el bloque 
var tarjetaCliente = "Banco Macro"


if (precioTelevisor > 5000 && tarjetaCliente === "Santander Rio") {
    console.log("Aplicar descuento principal")
    console.log("El televisor podra ser pago en 12 cuotas sin interes")
    var decuentoTelevisor = precioTelevisor * descuentoPrincipal
    var precioFinal = precioTelevisor - decuentoTelevisor
    console.log(precioFinal)
}

// 4.2 OR (||) (o logico)
// Con tal de que una de las condiciones sea verdadera (true),
// el 


if (precioTelevisor > 5000 || tarjetaCliente === "Santander Rio") {
    console.log("Aplicar descuento principal")
    console.log("El televisor podra ser pago en 12 cuotas sin interes")
    var decuentoTelevisor = precioTelevisor * descuentoPrincipal
    var precioFinal = precioTelevisor - decuentoTelevisor
    console.log(precioFinal)
}

// 4.3 not (!)
// el not invertimos el valor de una propiedad
console.log(!true)
console.log(!false)
console.log(precioTelevisor)
console.log(!(precioTelevisor > 5000))

// 5 ejemplo del 25 % a un producto
// sie le mismo es mas caro que $5000
// y realizo mas de 2 compras per no mas de 5

var precioCafetera = 6000
var cantidadCompras = 3
var descuentoVeinticinco = 0.25

if (precioCafetera > 5000 && cantidadCompras >= 3 && cantidadCompras <= 5){
    console.log("aplicar el descuento de 25%")
    var decuentoTelevisor = precioTelevisor * descuentoVeinticinco
    var precioFinal = precioTelevisor - decuentoTelevisor
    console.log(precioFinal)
}

//ejercicio acceso por edad
/* 
    1. Preguntarle al usuario a través de un prompt su edad
    2. Si el usuario es menor de 18 años no lo dejaremos ingresar
    3. Si el usuario esta entre los 18 y 21, puede ingresar pero se le debe advertir que no puede tomar alcohol.
    4. En el ultimo caso, osea q es mayor a 21 años, puede ingresar tranquilamente
*/

var year = prompt("ingresa tu edad")

if (year < 18){
    alert("No Puedes acceder")
} else if(year >= 18 && year <= 21){
        alert("Puedes acceder pero no puedes tomar alcohol")
}
else {
    alert("Puedes acceder")
}

// 7 Valores falsos en JavaScript
// todo lo que no se encuentra en la lista tiene un valor booleano true
//Sino recordamos la lista podemos ejecutar boolean(en la consola de chrome)
/* 
    * String vacio : ""
    * Numero cero: 0
    * undefined
    * false
    * NaN
    * null
*/
console.log(Boolean(""))

var numero = 0
if (numero) {
    console.log("ingresaste un numero distinto de cero")
}

var nombre = "NeN"
if (nombre) {
    console.log("ingresaste un nombre")
}

var edad = "veinte"
eadad = Number(edad)
console.log(edad)





if(edad) {
    alert("Puede ingresar")
}

// 8. Ciclos o loops

// 8.1 Ciclos for
for (i = 0; i < 100; i++){
   // console.log(i)
} 
// Mostrar todos los numero impares menor a 100
/*for (i = 0; i < 100; i++)
    if(i % 2 !== 0){
    console.log("es impar",i )
    
} */
// 8.2 ciclo while
// mientras la condicion se cumpla el bloque de codigo se ejecuta

for (var i = 0; i < 100; i++) {
    if(i % 2 !==0)
    //console.log(i ,"es impar")   
}
// 8.3 ciclo do while
var j = 0
do{
    console.log(j)
    j++
} while(j < 100);

