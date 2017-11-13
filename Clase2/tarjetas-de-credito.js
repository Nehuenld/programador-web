var tarjetasDeCredito = "Banco Macro"

if (tarjetasDeCredito == "Banco Galicia") {
    console.log("Tiene hasta 12 cuotas")
}else if(tarjetasDeCredito == "Santander Rio") {
    console.log("Tiene hasta 16 cuotas")
}else if(tarjetasDeCredito == "Banco ICBC") {
    console.log("Tiene hasta 18 cuotas")
}else if(tarjetasDeCredito == "Banco Nacion") {
    console.log("Tiene hasta 24 cuotas")
}else {
    console.log("Su banco no tiene promociones vigentes")
}
switch (tarjetasDeCredito) {
    case "Banco Galicia":
        console.log("Tiene hasta 12 cuotas")
        break;
    case "Santander Rio":
        console.log("Tiene hasta 16 cuotas")
        break;
    case "Banco ICBC":
        console.log("Tiene hasta 18 cuotas")
        break;
    case "Banco Nacion":
        console.log("Tiene hasta 24 cuotas")
        break;

    default:
        console.log("Su banco no esta en la lista")
        break;
}