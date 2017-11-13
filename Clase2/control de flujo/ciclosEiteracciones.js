//loop

//for (declaración; condición; acción)

var x = 0;

for (i = 0; i < 5; i++)
{
    x+=i; 
    //console.log("x ->" + x);
}

//console.log("resultado final" + x);


//while  mientras se cumpla le suma

var ancho = 5;

while(ancho < 10)
    ancho+=2;

//console.log(ancho);


//do while

var bancos_disponibles = 32;

do{
    bancos_disponibles-=3;
    //console.log(bancos_disponibles);
}while (bancos_disponibles > 0)

console.log(bancos_disponibles);
