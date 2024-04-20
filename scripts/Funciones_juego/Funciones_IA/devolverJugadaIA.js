let indexCasilla=null, ultimaCasillaIA=null;

function devolverJugadaIA(){
    //Asegurarse de que se finaliza el juego
    if(juegoFinalizado){return;}
    
    //Pensamientos
    if(primeraJugada()){
    }
    else if(completar()){
    }
    else if(tresEsquinas()){
    }
    else if(atacar()){
    }
    else if(alternativa()){
    }
    else{
        alert("error");
    }
    
    //Guardar la ultima casilla
    ultimaCasillaIA = arrayCasillas[indexCasilla];
    
    return indexCasilla;
}