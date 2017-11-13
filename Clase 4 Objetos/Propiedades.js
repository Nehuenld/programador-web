//definicion
function auto (xMarca, xColor)
{
    this.marca = xMarca;
    this.color = xColor;
    this.arrancar = function () 
    {
        console.log("Auto en marcha");   
    }
}
var autoRojo = new auto ("peugeot","rojo")

autoRojo.arrancar();
console.log(autoRojo)