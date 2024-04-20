function tresEsquinas(){
    indexCasilla=null;
    
    //Guardar el signo de la IA
    let signo=devolverCambiarSigno();
    let signO=devolverCambiarSigno();
    
    arrayFuncionesTresEsquinas.forEach((funcion,indice)=>{
        if(funcion(signo,signO)){
            switch(indice){
                case 0: indexCasilla=0;
                return;
                case 1: indexCasilla=2;
                return;
                case 2: indexCasilla=6;
                return;
                case 3: indexCasilla=8;
                return;
            }
        }
    });
    
    if(indexCasilla!==null){
        return true;
    }
}

function tE_1(_signo,_signO){
    if((horizontal_1()[0]===" ") &&
       (horizontal_2()===vertical_2()) &&
       (horizontal_2()===(_signO + _signo + " ")))
    {
        return true;
    }
}

function tE_2(_signo,_signO){
    if((horizontal_1()[2]=" ") &&
       (vertical_2()===(_signO + _signo + " ")) &&
       (horizontal_2()===(" " + _signo + _signO)))
    {
        return true;
    }
}

function tE_3(_signo,_signO){
    if((horizontal_3()[0]===" ") &&
       (vertical_2()===(" " + _signo + _signO)) &&
       (horizontal_2()===(_signO + _signo + " ")))
    {
        return true;
    }
}

function tE_4(_signo,_signO){
    if((horizontal_3()[2]===" ") &&
       (vertical_2()===horizontal_2()) &&
       (horizontal_2()===(" " + _signo + _signO)))
    {
        return true;
    }
}

let arrayFuncionesTresEsquinas = [tE_1,tE_2,tE_3,tE_4];