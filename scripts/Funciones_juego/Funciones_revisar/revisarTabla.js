function revisarTabla(){
    //Variable de retorno
    let puedeRetornar=3;
    
    //Se lee la tabla
    obtenerSignosCasillas();
    
    //Se revisan las lineas
    arrayFuncionesLineas.forEach((funcion) => {
        if(funcion() === "XXX" || funcion() === "OOO"){
            puedeRetornar=1;
        }
    });
    
    //Se revisa el empate
    if(!stringSignos.includes(' ') && puedeRetornar===3){
        puedeRetornar=2;
    }
    
    return puedeRetornar;
}