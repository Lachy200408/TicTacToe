function funcionesCasillas(e){
    //Solucion bug de tocar muy rapido
    if(soloJugador){
        deshabilitarCasillas();
    }
    
    //Inhibir la casillas marcadas
    if(e.target.innerHTML !== " "){return;}
    
    //Marcar casilla
    e.target.innerHTML = devolverCambiarSigno();
    
    //Guardar signo para funcion undo
    ultimaCasilla = e.target;
    
    //Se llama a la funcion juego
    if(soloJugador){
        setTimeout( juego, 500);
    }
    else{
        juego();
    }
}