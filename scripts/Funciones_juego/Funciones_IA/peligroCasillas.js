function pC_1(){
    if(((horizontal_1()[0]===" ") && (horizontal_1()[1]===horizontal_1()[2]) && (horizontal_1()[1]!==" ")) ||
       ((vertical_1()[0]===" ") && (vertical_1()[1]===vertical_1()[2]) && (vertical_1()[1]!==" ")) ||
       ((diagonal_1()[0]===" ") && (diagonal_1()[1]===diagonal_1()[2]) && (diagonal_1()[1]!==" ")))
    {
        return true;
    }
}

function pC_2(){
    if(((horizontal_1()[1]===" ") && (horizontal_1()[0]===horizontal_1()[2]) && (horizontal_1()[0]!==" ")) ||
       ((vertical_2()[0]===" ") && (vertical_2()[1]===vertical_2()[2]) && (vertical_2()[1]!==" ")))
    {
        return true;
    }
}

function pC_3(){
    if(((horizontal_1()[2]===" ") && (horizontal_1()[1]===horizontal_1()[0]) && (horizontal_1()[1]!==" ")) ||
       ((vertical_3()[0]===" ") && (vertical_3()[1]===vertical_3()[2]) && (vertical_3()[1]!==" ")) ||
       ((diagonal_2()[0]===" ") && (diagonal_2()[1]===diagonal_2()[2]) && (diagonal_2()[1]!==" ")))
    {
        return true;
    }
}

function pC_4(){
    if(((horizontal_2()[0]===" ") && (horizontal_2()[1]===horizontal_2()[2]) && (horizontal_2()[1]!==" ")) ||
       ((vertical_1()[1]===" ") && (vertical_1()[0]===vertical_1()[2]) && (vertical_1()[0]!==" ")))
    {
        return true;
    }
}

function pC_5(){
    if(((horizontal_2()[1]===" ") && (horizontal_2()[0]===horizontal_2()[2]) && (horizontal_2()[0]!==" ")) ||
       ((vertical_2()[1]===" ") && (vertical_2()[0]===vertical_2()[2]) && (vertical_2()[0]!==" ")) ||
       ((diagonal_2()[1]===" ") && (diagonal_2()[0]===diagonal_2()[2]) && (diagonal_2()[0]!==" ")) ||
       ((diagonal_1()[1]===" ") && (diagonal_1()[0]===diagonal_1()[2]) && (diagonal_1()[0]!==" ")))
    {
        return true;
    }
}

function pC_6(){
    if(((horizontal_2()[2]===" ") && (horizontal_2()[1]===horizontal_2()[0]) && (horizontal_2()[1]!==" ")) ||
       ((vertical_3()[1]===" ") && (vertical_3()[0]===vertical_3()[2]) && (vertical_3()[0]!==" ")))
    {
        return true;
    }
}

function pC_7(){
    if(((horizontal_3()[0]===" ") && (horizontal_3()[2]===horizontal_3()[1]) && (horizontal_3()[2]!==" ")) ||
       ((vertical_1()[2]===" ") && (vertical_1()[1]===vertical_1()[0]) && (vertical_1()[1]!==" ")) ||
       ((diagonal_2()[2]===" ") && (diagonal_2()[1]===diagonal_2()[0]) && (diagonal_2()[1]!==" ")))
    {
        return true;
    }
}

function pC_8(){
    if(((horizontal_3()[1]===" ") && (horizontal_3()[0]===horizontal_3()[2]) && (horizontal_3()[0]!==" ")) ||
       ((vertical_2()[2]===" ") && (vertical_2()[1]===vertical_2()[0]) && (vertical_2()[1]!==" ")))
    {
        return true;
    }
}

function pC_9(){
    if(((horizontal_3()[2]===" ") && (horizontal_3()[1]===horizontal_3()[0]) && (horizontal_3()[1]!==" ")) ||
       ((vertical_3()[2]===" ") && (vertical_3()[0]===vertical_3()[1]) && (vertical_3()[0]!==" ")) ||
       ((diagonal_1()[2]===" ") && (diagonal_1()[1]===diagonal_1()[0]) && (diagonal_1()[1]!==" ")))
    {
        return true;
    }
}

let arrayFuncionesPeligroCasillas=[pC_1,pC_2,pC_3,pC_4,pC_5,pC_6,pC_7,pC_8,pC_9];