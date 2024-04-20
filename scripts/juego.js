let juegoFinalizado=false, soloJugador=false, turno=0;

function juego(){
    let puedeSalir=false;
    
    //Itera el turno
    turno++;
    
    //Se revisa la tabla
    revision();
    if(puedeSalir){return;}
    
    //Juego contra la IA
    if(soloJugador && turno!==9){
        //Se llama a la funcion de la IA
        arrayCasillas[devolverJugadaIA()].innerHTML=devolverCambiarSigno();
        turno++;
        
        //Se revisa nuevamente la tabla
        revision();
        if(puedeSalir){return;}
        
        habilitarCasillas();
    }
    
    
}

function revision(){
    //Revisar la tabla
    switch(revisarTabla()){
        case 1:{
            cambiarTituloGanador();
            deshabilitarCasillas();
            sacarTituloGanador();
            juegoFinalizado=true;
            puedeSalir=true;
            return;
        }
        case 2:{
            cambiarTituloGanador("tabla");
            deshabilitarCasillas();
            sacarTituloGanador();
            juegoFinalizado=true;
            puedeSalir=true;
            return;
        }
    }
}