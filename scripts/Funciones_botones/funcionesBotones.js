function funcionesBotones(e){
    const clase = e.target.className;
    if(clase === "soloJugador"){
        soloJugador=true;
        comenzarJuego();
    }
    else if(clase === "multijugador"){
        comenzarJuego();
    }
    else if(clase === "undo"){
        //Si se acabo el juego, no se ejecuta
        if(juegoFinalizado){return;}
        
        //Revertir primero la jugada de la IA
        if(soloJugador){
            if(ultimaCasillaIA.innerHTML !== " "){
                devolverCambiarSigno();
            }
            ultimaCasillaIA.innerHTML=" ";
        }
        
        //Se llama a esta funcion para mantener el signo igual al anterior
        if(ultimaCasilla.innerHTML !== " "){
            devolverCambiarSigno();
        }
        ultimaCasilla.innerHTML=" ";
    }
    else if(clase === "restart"){
        //Reseteo las variables del juego
        resetVars();
        
        if(titulo.className === "animacionEntrada"){
            titulo.click();
        }
        
        //Reseteo la informacion de la pantalla
        limpiarCasillas();
        deshabilitarCasillas();
        deshabilitarBotones();
        cambiarBotones();
        menuPrincipal();
    }
    else{
        alert("Ha habido un error con la clase de los botones.");
        window.close();
    }
}