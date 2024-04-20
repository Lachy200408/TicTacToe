function cambiarBotones(){
    const arrayBotones = document.getElementsByTagName("button");
    
    if(arrayBotones[0].className === "soloJugador"){
        for(let i=0; i<2; i++){
            arrayBotones[i].className=arrayClases[i+2];
            arrayBotones[i].innerHTML=arrayTextoBotones[i+2];
        }
    }
    else{
        for(let i=0; i<2; i++){
            arrayBotones[i].className=arrayClases[i];
            arrayBotones[i].innerHTML=arrayTextoBotones[i];
        }
    }
}