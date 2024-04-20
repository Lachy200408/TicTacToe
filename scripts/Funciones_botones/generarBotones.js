const cajaBotones = document.getElementsByClassName("cajaBotones")[0];
const arrayClases = ["soloJugador","multijugador","undo","restart"];
const arrayTextoBotones = ["Un jugador","Multijugador","Undo","Restart"];

function generarBotones(){
    for(let i=0; i<2; i++){
        cajaBotones.innerHTML+=`<button class="${arrayClases[i]}">${arrayTextoBotones[i]}</button>`;
    }
}

generarBotones();