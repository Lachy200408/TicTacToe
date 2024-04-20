const cajaCasillas = document.querySelector(".cajaCasillas");

function generarCasillas(){
    for(let i=0; i<9; i++){
        cajaCasillas.innerHTML+= `<div class="casilla"> </div>`;
    }
}

generarCasillas();