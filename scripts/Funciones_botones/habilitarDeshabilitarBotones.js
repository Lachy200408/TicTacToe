const botones = document.querySelectorAll('button');

function habilitarBotones(){
    for(let i=0; i<2; i++){
        botones[i].addEventListener('click',funcionesBotones,false);
    }
}

function deshabilitarBotones(){
    for(let i=0; i<2; i++){
        botones[i].removeEventListener('click',funcionesBotones);
    }
}