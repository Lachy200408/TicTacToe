function sacarTituloGanador(){
    titulo.addEventListener('click',a,false);
}

function a(){
    deshabilitarTitulo();
    titulo.removeEventListener('click',a);
}