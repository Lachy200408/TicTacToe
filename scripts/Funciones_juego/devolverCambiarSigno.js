let signoAnterior="O";
let signo="";

function devolverCambiarSigno(){
    if(signoAnterior === "X"){
        signo="O";
    }
    else{
        signo="X";
    }
    
    signoAnterior=signo;
    return signo;
}