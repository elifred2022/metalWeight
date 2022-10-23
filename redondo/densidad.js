        
function resultado(valueDiametro) {
    return 3.14 * (valueDiametro * valueDiametro) / 4;
 }
 
 function calcularPesoRedondo() {
 
    
     const diametro = document.getElementById("diametro");
     const valueDiametro = parseInt(diametro.value);
 
     
     const resultado2 = resultado(valueDiametro) + " Kgs";
                 
     alert(resultado2); }
 