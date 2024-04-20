function completar(){
    indexCasilla=null;
    
    arrayFuncionesPeligroCasillas.forEach((funcion,indice)=>{
        if(funcion()){
            if(indexCasilla===null){
                indexCasilla=indice;
            }
        }
    });
    
    if(indexCasilla!==null){
        return true;
    }
}