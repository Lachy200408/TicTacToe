const titulo = document.getElementById("titulo");

function habilitarTitulo(){
    titulo.className="animacionEntrada";
    titulo.innerHTML="Tic Tac Toe";
    
    //Se coloca el EventListener
    titulo.addEventListener('click',clickTitulo,false);
}

async function deshabilitarTitulo(){
    //Se quita el Listener
    titulo.removeEventListener('click',clickTitulo);
    
    titulo.className="animacionSalida";
    titulo.style="animation-delay:0s";
}