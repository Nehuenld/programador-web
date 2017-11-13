//directo

var calculadora =
{
    marca:"casio",
    color:"negro",
    display:"3 pulgadas",
    n_pilas : 1,
    tipo_pilas : "aa",
    sumar : function(n1,n2)
    {
        return (n1+n2);
    },
    dividir : function(n1,n2)
    {
        return (n1/n2)
    },
    restar : function (n1,n2) 
    {
        return (n1 - n2);
    },
    multiplicar : function (n1, n2) 
    {
        return (n1 * n2)
    }
}
console.log(calculadora.tipo_pilas)
console.log(calculadora.sumar(1,2));


