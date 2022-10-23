/*var densidad = "";
var diametro = "";
var largo = "";
var resultado = "";*/

var pi = 3.14;

const seccion= "";



function resultado(valueDensidad, valueLargo, valueDiametro) {

    
   
    return valueDensidad * valueLargo * valueDiametro; 
    // peso = densidad x longitud x seccion
}

function calcularPesoRedondo() {

    const densidad = document.getElementById("densidad");
    const valueDensidad = parseInt(densidad.value);

    const diametro = document.getElementById("diametro");
    const valueDiametro = parseInt(diametro.value);
    
    const largo = document.getElementById("largo");
    const valueLargo = parseInt(largo.value);
   

    const resultado2 = resultado(valueDensidad, valueDiametro, valueLargo) + " Kgs";
                
    alert(resultado2); }



     



  /*            
function tal(valueDensidad) {
   return 3.14 * (valueDensidad * valueDensidad) / 4;
}*/