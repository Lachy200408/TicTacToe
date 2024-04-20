let ultimaCasilla = null;

function setListenersCasillas(){
    for(let i=0; i<9; i++){
        arrayCasillas[i].addEventListener('click',funcionesCasillas,false);
    }
}