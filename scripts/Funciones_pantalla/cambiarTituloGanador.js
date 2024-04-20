function cambiarTituloGanador(tabla=""){
    const arrayTextos = ["He ganado", "Has perdido", "Lo siento", "Genial", "Que tonto", "Que gay", "Homosexual", "¿ Sexo ?", "Mejora", "Estupido", "Estupida", "Que Dawn"];
    
    //Cambio el texto del titulo
    if(tabla === "tabla"){
        titulo.innerHTML = "Tablas";
    }
    else{
        titulo.innerHTML = arrayTextos[numeroRandom(12)];
    }
    
    //Se le da entrada
    titulo.className = "animacionEntrada";
}