    //Selectores html    
    const resultado = document.querySelector('#resultado');
    const rojo = document.querySelector('#rojo');
    const verde = document.querySelector('#verde');
    const azul = document.querySelector('#azul');

    let textRojo = document.querySelector('#texto-rojo');
    const textVerde = document.querySelector('#texto-verde');
    const textAzul = document.querySelector('#texto-azul');

    let rojoseleccion = rojo.value;
    let verdeseleccion = verde.value;
    let azulseleccion = azul.value;
    let miColor;
 
    
    rojo.addEventListener('input', () =>{
        rojoseleccion = rojo.value;        
        mostrardatos();
        
    });
    verde.addEventListener('input', () =>{
        verdeseleccion = verde.value;        
        mostrardatos();        
    });
    azul.addEventListener('input', () =>{
        azulseleccion = azul.value;        
        mostrardatos();       
    });

    document.body.style.backgroundColor='150, 125, 120';
    
    // textRojo.textContent = `Código: ${rojoseleccion}`;
    function mostrardatos(){
        textRojo.textContent = `Código: ${rojoseleccion}`;
        textVerde.textContent= `Código: ${verdeseleccion}`;
        textAzul.textContent= `Código: ${azulseleccion}`;        
        miColor = `RGB(${rojoseleccion}, ${verdeseleccion}, ${azulseleccion})`;
        
        document.body.style.backgroundColor = miColor;       
        
        resultado.textContent = miColor;
        

    }
    