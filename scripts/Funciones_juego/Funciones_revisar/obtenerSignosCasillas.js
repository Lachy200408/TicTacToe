let stringSignos="";

function obtenerSignosCasillas(){
    //Reseteo la stringSignos antes de manipularla
    stringSignos="";
    
    const arrayCasillas = document.querySelectorAll('.casilla');
    
    arrayCasillas.forEach((casilla) => {
        stringSignos += casilla.innerHTML;
    });
}