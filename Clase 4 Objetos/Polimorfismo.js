/*Polimorfismo

La palabra polimorfismo significa que un objeto posee varias formas diferentes.
Este es uno de los conceptos esenciales de una programación orientada a objetos.
Así como la herencia está relacionada con las clases y su jerarquía, 
el polimorfismo se relaciona con los métodos.

En general, hay tres tipos de polimorfismo:
​
* Polimorfismo de sobrecarga
    * Polimorfismo paramétrico (también llamado polimorfismo de plantillas)
        * Polimorfismo de inclusión (también llamado redefinición o subtipado)



-----
​
## Polimorfismo de sobrecarga
​
El polimorfismo de sobrecarga ocurre cuando las funciones del mismo nombre existen,
 con funcionalidad similar, en clases que son completamente independientes una de otra
  (éstas no tienen que ser clases secundarias de la clase objeto).
  Por ejemplo, la clase complex, la clase image y la clase link pueden todas
   tener la función "display".Esto significa que no necesitamos preocuparnos sobre
    el tipo de objeto con el que estamos trabajando si todo lo que deseamos es verlo
     en la pantalla.

Por lo tanto, el polimorfismo de sobrecarga nos permite definir operadores 
cuyos comportamientos varían de acuerdo a los parámetros que se les aplican.
Así es posible, por ejemplo, agregar el operador + y hacer que se comporte de manera 
distinta cuando está haciendo referencia a una operación entre dos números enteros 
(suma) o bien cuando se encuentra entre dos cadenas de caracteres (concatenación).
​
-----
​
## Polimorfismo paramétrico
​
El polimorfismo paramétrico es la capacidad para definir varias funciones utilizando
 el mismo nombre, pero usando parámetros diferentes (nombre y/ o tipo).
 El polimorfismo paramétrico selecciona automáticamente el método correcto a aplicar
  en función del tipo de datos pasados en el parámetro.

Por lo tanto, podemos por ejemplo, definir varios métodos homónimos de addition()
 efectuando una suma de valores.
​
* El método int addition(int, int) devolvería la suma de dos números enteros.
* float addition(float, float) devolvería la suma de dos flotantes.
* char addition(char, char) daría por resultado la suma de dos caracteres definidos por
 el autor.

Una signature es el nombre y tipo (estático) que se da a los argumentos de una función.
Por esto, una firma de método determina qué elemento se va a llamar.
​
-----
​
## Polimorfismo de inclusión
​
La habilidad para redefinir un método en clases que se hereda de una clase base se llama
 especialización.Por lo tanto, se puede llamar un método de objeto sin tener que conocer
  su tipo intrínseco: esto es polimorfismo de subtipado.
  Permite no tomar en cuenta detalles de las clases especializadas de una familia de objetos,
   enmascarándolos con una interfaz común (siendo esta la clase básica).

Imagine un juego de ajedrez con los objetos rey, reina, alfil, caballo, torre y peón,
 cada uno heredando el objeto pieza.

El método movimiento podría, usando polimorfismo de subtipado, 
hacer el movimiento correspondiente de acuerdo a la clase objeto que se llama.
Esto permite al programa realizar el movimiento.de_pieza sin tener que verse conectado
 con cada tipo de pieza en particular.
*/
