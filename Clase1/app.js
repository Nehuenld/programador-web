var edad = 25;
console.log(edad);

var nombre = "leo";
console.log(nombre);

console.log(nombre, edad);

var codingBootcamp = "Coderhouse";
console.log (codingBootcamp);

//las palabras reservadas son aquellas que no podemos utilizar en nuestro
//codigo

//#MAYUSCULAS Y MINUSCULAS

var NombreApellido = "Nehuen Diaz"
console.log (NombreApellido)

//COMENTARIO DE UNA SOLA LINEA
/*COMENTARIO
DE MULTIPLES 
LINEAS*/

var tempAgua = 43
var mensaje = "la temperatura del agua en grados es:"
console.log(mensaje, tempAgua);

/* USAMOS TYPEOF PARA RECONOCER EL TIPO DE UNA VARIABLE*/
tempAgua = 45
console.log(typeof tempAgua)

/* LOS NUEMEROS LOS DEFINIMOS SIN COMILLAS*/

var estanLasLucesPrendidas = false
console.log("Estan las luces prendidas", estanLasLucesPrendidas)
console.log(typeof 
estanLasLucesPrendidas)

estanLasLucesPrendidas = false
console.log("Estan las luces prendidas", estanLasLucesPrendidas)

/*Que es Undefined*/
var estaElTermoConAgua 
console.log(estaElTermoConAgua)


//Operadores
// suma resta division multiplicacion
var suma = 2 + 2
console.log(suma) 

var numeroMuyGrande = 1000
var numeroMuyChico = 2
var resultadosuma = numeroMuyGrande + numeroMuyChico
console.log(resultadosuma)
//resta
var resultadoResta = numeroMuyGrande - numeroMuyChico
console.log(resultadoResta)
// multiplicacion
var resultadomultiplicacion = numeroMuyGrande * numeroMuyChico
console.log(resultadomultiplicacion)
// division
var resultadodivido = numeroMuyGrande / numeroMuyChico
console.log(resultadodivido)
// resto
var resultaResto = numeroMuyGrande % numeroMuyChico
console.log(resultaResto)
// potenciacion
var resultadoPotenciacion = 2 ** 2
// 2 elevado al cuadrado 2al2
console.log(resultadoPotenciacion)

// NEGACION 

var unNumero = 32
console.log(-unNumero)

//Incremento

var otroNumero = 4
otroNumero = otroNumero + 1
console.log(otroNumero)

otroNumero++
console.log(otroNumero)

// decremento
otroNumero--
console.log(otroNumero)

// suma de strings, y suma

var nombreAlumno = "Nehuen"
var apellidoAlumno = "Diaz"
var nombreCompleto = nombreAlumno + " " + apellidoAlumno
console.log(nombreCompleto)

//suma de strings con numbers
var sumaStringConNumeroMuyChico = numeroMuyChico + nombreAlumno
console.log(sumaStringConNumeroMuyChico)

//comparar dos cosas

//comparación Débil
// La comparación débil tiene la sintasis "="
// compara solan¿mente el valor de lo que estemos comparando

console.log(estanLasLucesPrendidas)
if (estanLasLucesPrendidas == true) {
    console.log("no estan prendida")
}
console.log(4 == 2)
console.log("4" == 4)

var puntosDeUsuario = 1200
console.log(puntosDeUsuario)

//comparacion Fuerte

console.log("4" === 4)



var numeroIngresado = prompt("ingresa un numero")
console.log(numeroIngresado)

var otroNumeroIngresado = prompt("ingresa otro numero")
console.log(otroNumeroIngresado)

console.log(otroNumeroIngresado + numeroIngresado)

alert(Number(numeroIngresado) + Number(otroNumeroIngresado))
alert(Number(numeroIngresado) - Number(otroNumeroIngresado))
alert(Number(numeroIngresado) * Number(otroNumeroIngresado))
alert(Number(numeroIngresado) / Number(otroNumeroIngresado))


