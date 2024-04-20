function primeraJugada(){
    indexCasilla=null;
    
    if(turno===1){
        indexCasilla = (arrayCasillas[4].innerHTML === ' ')? 4 : numeroRandom(9,4);
    }
    
    if(indexCasilla!==null){
        return true;
    }
}