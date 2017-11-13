//break corta el ciclo si es que por ejemplo encontramos un nombre o un numero

for (i = 0; i < 100; i++){
    if (i ==12){
    console.log("i = " + i);
        break;
    }
    console.log("i = " + i);
}


// continue

for (j = 0; j < 100; j++){
    if (j < 50){
    console.log("j = " + j);
        continue;
    }
    console.log("j = " + j);
}

