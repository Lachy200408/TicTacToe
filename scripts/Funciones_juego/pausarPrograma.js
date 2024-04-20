function pausarPrograma(){
    let inicio=Date.now();
    
    while(1){
        let tiempoTranscurrido = Date.now() - inicio;
        
        if(tiempoTranscurrido >= 100){
            return;
        }
    }
}