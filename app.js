    //Selectores
    const inputRojo = document.querySelector('#rojo');
    const inputVerde = document.querySelector('#verde');
    const inputAzul = document.querySelector('#azul');
    const textRojo = document.querySelector('#texto-rojo');
    const textVerde = document.querySelector('#texto-verde');
    const textAzul = document.querySelector('#texto-azul');
    const resultado = document.querySelector('#resultado');

    
        let rojo = inputRojo.value;
        let verde = inputVerde.value;
        let azul = inputAzul.value;    
        textRojo.textContent = `Código: ${rojo}`;
        textVerde.textContent = `Código: ${verde}`;
        textAzul.textContent = `Código: ${azul}`;
        updateColor();
    
        inputRojo.addEventListener('input', (e) =>{        
            rojo = e.target.value;
            updateColor(rojo);               
            
        });
        inputVerde.addEventListener('input', (e) =>{        
            verde = e.target.value;
            updateColor(verde);       
            
        });
        inputAzul.addEventListener('input', (e) =>{        
            azul = e.target.value;
            updateColor(azul);      
        });  
    
        function updateColor(){        
             textRojo.textContent = `Código: ${rojo}`;
             textVerde.textContent = `Código: ${verde}`;
             textAzul.textContent = `Código: ${azul}`;
             const colorRGB = `RGB(${rojo}, ${verde}, ${azul})`;
             resultado.textContent =`RGB(${rojo}, ${verde}, ${azul})`;
             document.body.style.backgroundColor = colorRGB;      
    
        }
    

    