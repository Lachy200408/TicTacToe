const horizontal_1 = () => {
    return stringSignos.slice(0,3);
}

const horizontal_2 = () => {
    return stringSignos.slice(3,6);
}

const horizontal_3 = () => {
    return stringSignos.slice(6,9);
}

const vertical_1 = () => {
    return stringSignos.charAt(0) + stringSignos.charAt(3) + stringSignos.charAt(6);
}

const vertical_2 = () => {
    return stringSignos.charAt(1) + stringSignos.charAt(4) + stringSignos.charAt(7);
}

const vertical_3 = () => {
    return stringSignos.charAt(2) + stringSignos.charAt(5) + stringSignos.charAt(8);
}

const diagonal_1 = () => {
    return stringSignos.charAt(0) + stringSignos.charAt(4) + stringSignos.charAt(8);
}

const diagonal_2 = () => {
    return stringSignos.charAt(2) + stringSignos.charAt(4) + stringSignos.charAt(6);
}

const arrayFuncionesLineas = [horizontal_1,horizontal_2,horizontal_3,vertical_1,vertical_2,vertical_3,diagonal_1,diagonal_2];