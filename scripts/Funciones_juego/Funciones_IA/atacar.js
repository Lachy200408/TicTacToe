function atacar(){
    indexCasilla=null;
    
    //Guardar el signo de la IA
    let signo=devolverCambiarSigno();
    let signO=devolverCambiarSigno();
    
    //Ejecutar las funciones
    arrayFuncionesAtacarCasillas.forEach((funcion,indice)=>{
        if(funcion(signo,signO)){
            if(indexCasilla===null){
                indexCasilla = (indice==0)? 0:
                               (indice==1)? 2:
                               (indice==2)? 6:
                               (indice==3)? 8:
                               (indice==4)? 1:
                               (indice==5)? 3:
                               (indice==6)? 5:
                               (indice==7)? 7: 4;
            }
        }
    });
    
    //Actuar ante la esquina y el lateral
    if(lateralEsquina()){
        indexCasilla=null;
        
        arrayFuncionesLateralEsquina.forEach((funcion,indice)=>{
            if(funcion(signO)){
                if(indexCasilla===null){
                    indexCasilla = (indice==0)? 0:
                                   (indice==1)? 2:
                                   (indice==2)? 6: 8;
                }
            }
        });
    }
    
    //Actuar ante la diagonal llena y las tres esquinas
    if(diagonalTresEsquinas(signo,signO)){
        do{
            switch(numeroRandom(4)){
                case 0: indexCasilla=1; break;
                case 1: indexCasilla=3; break;
                case 2: indexCasilla=5; break;
                case 3: indexCasilla=7; break;
            }
        }while(arrayCasillas[indexCasilla].innerHTML !== " ");
    }
    
    if(indexCasilla!==null){
        return true;
    }
}

function atacarCasilla_1(_signo,_signO){
    if(((horizontal_1()[0]===" ") && (horizontal_1()[1]!==horizontal_1()[2]) && (!horizontal_1().includes(_signO))) ||
       ((vertical_1()[0]===" ") && (vertical_1()[1]!==vertical_1()[2]) && (!vertical_1().includes(_signO))) ||
       ((diagonal_1()[0]===" ") && (diagonal_1()[1]!==diagonal_1()[2]) && (!diagonal_1().includes(_signO))))
    {
        return true;
    }
}

function atacarCasilla_2(_signo,_signO){
    if(((horizontal_1()[1]===" ") && (horizontal_1()[0]!==horizontal_1()[2]) && (!horizontal_1().includes(_signO))) ||
       ((vertical_2()[0]===" ") && (vertical_2()[1]!==vertical_2()[2]) && (!vertical_2().includes(_signO))))
    {
        return true;
    }
}

function atacarCasilla_3(_signo,_signO){
    if(((horizontal_1()[2]===" ") && (horizontal_1()[1]!==horizontal_1()[0]) && (!horizontal_1().includes(_signO))) ||
       ((vertical_3()[0]===" ") && (vertical_3()[1]!==vertical_3()[2]) && (!vertical_3().includes(_signO))) ||
       ((diagonal_2()[0]===" ") && (diagonal_2()[1]!==diagonal_2()[2]) && (!diagonal_2().includes(_signO))))
    {
        return true;
    }
}

function atacarCasilla_4(_signo,_signO){
    if(((horizontal_2()[0]===" ") && (horizontal_2()[1]!==horizontal_2()[2]) && (!horizontal_2().includes(_signO))) ||
       ((vertical_1()[1]===" ") && (vertical_1()[0]!==vertical_1()[2]) && (!vertical_1().includes(_signO))))
    {
        return true;
    }
}

function atacarCasilla_5(_signo,_signO){
    if(((horizontal_2()[1]===" ") && (horizontal_2()[0]!==horizontal_2()[2]) && (!horizontal_2().includes(_signO))) ||
       ((vertical_2()[1]===" ") && (vertical_2()[0]!==vertical_2()[2]) && (!vertical_2().includes(_signO))) ||
       ((diagonal_1()[1]===" ") && (diagonal_1()[0]!==diagonal_1()[2]) && (!diagonal_1().includes(_signO))) ||
       ((diagonal_2()[1]===" ") && (diagonal_2()[0]!==diagonal_2()[2]) && (!diagonal_2().includes(_signO))))
    {
        return true;
    }
}

function atacarCasilla_6(_signo,_signO){
    if(((horizontal_2()[2]===" ") && (horizontal_2()[0]!==horizontal_2()[1]) && (!horizontal_2().includes(_signO))) ||
       ((vertical_3()[1]===" ") && (vertical_3()[0]!==vertical_3()[2]) && (!vertical_3().includes(_signO))))
    {
        return true;
    }
}

function atacarCasilla_7(_signo,_signO){
    if(((horizontal_3()[0]===" ") && (horizontal_3()[1]!==horizontal_3()[2]) && (!horizontal_3().includes(_signO))) ||
       ((vertical_1()[2]===" ") && (vertical_1()[1]!==vertical_1()[0]) && (!vertical_1().includes(_signO))) ||
       ((diagonal_2()[2]===" ") && (diagonal_2()[1]!==diagonal_2()[0]) && (!diagonal_2().includes(_signO))))
    {
        return true;
    }
}

function atacarCasilla_8(_signo,_signO){
    if(((horizontal_3()[1]===" ") && (horizontal_3()[0]!==horizontal_3()[2]) && (!horizontal_3().includes(_signO))) ||
       ((vertical_2()[2]===" ") && (vertical_2()[0]!==vertical_2()[1]) && (!vertical_2().includes(_signO))))
    {
        return true;
    }
}

function atacarCasilla_9(_signo,_signO){
    if(((horizontal_3()[2]===" ") && (horizontal_3()[1]!==horizontal_3()[0]) && (!horizontal_3().includes(_signO))) ||
       ((vertical_3()[2]===" ") && (vertical_3()[1]!==vertical_3()[0]) && (!vertical_3().includes(_signO))) ||
       ((diagonal_1()[2]===" ") && (diagonal_1()[1]!==diagonal_1()[0]) && (!diagonal_1().includes(_signO))))
    {
        return true;
    }
}

let arrayFuncionesAtacarCasillas = [atacarCasilla_1,atacarCasilla_3,atacarCasilla_7,atacarCasilla_9,atacarCasilla_2,atacarCasilla_4,atacarCasilla_6,atacarCasilla_8,atacarCasilla_5];

function diagonalTresEsquinas(signo,signO){
    if(((diagonal_1() === (signO+signo+signO)) ||
       (diagonal_2() === (signO+signo+signO))) &&
       (turno<5))
    {
        return true;
    }
}

function lateralEsquina(){
    if((horizontal_2().split("").sort().join("") === diagonal_1().split("").sort().join("")) ||
       (horizontal_2().split("").sort().join("") === diagonal_2().split("").sort().join("")) ||
       (vertical_2().split("").sort().join("") === diagonal_1().split("").sort().join("")) ||
       (vertical_2().split("").sort().join("") === diagonal_2().split("").sort().join("")))
    {
        return true;
    }
}

function rE_1(_signO){
    if((horizontal_1()[0]===" ") &&
       (horizontal_1().split("").sort().join("") === vertical_1().split("").sort().join("")) &&
       (horizontal_1().split("").sort().join("") === "  "+_signO))
    {
        return true;
    }
}

function rE_2(_signO){
    if((horizontal_1()[2]===" ") &&
       (horizontal_1().split("").sort().join("") === vertical_3().split("").sort().join("")) &&
       (horizontal_1().split("").sort().join("") === "  "+_signO))
    {
        return true;
    }
}

function rE_3(_signO){
    if((horizontal_3()[0]===" ") &&
       (horizontal_3().split("").sort().join("") === vertical_1().split("").sort().join("")) &&
       (horizontal_3().split("").sort().join("") === "  "+_signO))
    {
        return true;
    }
}

function rE_4(_signO){
    if((horizontal_3()[2]===" ") && 
       (horizontal_3().split("").sort().join("") === vertical_3().split("").sort().join("")) &&
       (horizontal_3().split("").sort().join("") === "  "+_signO))
    {
        return true;
    }
}

let arrayFuncionesLateralEsquina = [rE_1,rE_2,rE_3,rE_4];