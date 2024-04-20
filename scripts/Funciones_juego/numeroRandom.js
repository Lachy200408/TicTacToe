function numeroRandom(rango,diferente=null) {
    let num = Math.floor(Math.random() * rango);
    
    if(num === diferente){
        num = Math.floor(Math.random() * diferente);
    }
    
    return num;
}