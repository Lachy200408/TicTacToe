const arrayCasillas = document.querySelectorAll(".casilla");

function habilitarCasillas(){
    setListenersCasillas();
}

function deshabilitarCasillas(){
    arrayCasillas.forEach((casilla) => {
        casilla.removeEventListener('click',funcionesCasillas);
    });
}