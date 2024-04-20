function alternativa(){
    let vueltas=0;
    
    try{
        while(arrayCasillas[indexCasilla].innerHTML!==" "){
            indexCasilla++;
            vueltas++;
        
            if(indexCasilla===8){
                indexCasilla=0;
            }
            if(vueltas===9){return;}
        }
    }
    catch(err){
        indexCasilla=0;
        alternativa();
    }
    
    if(indexCasilla!==null){
        return true;
    }
}