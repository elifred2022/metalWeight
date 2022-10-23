const um = [
    "Milimetro",
    "Centimetro",
    "Metro",
];

const material = [
    "Acero",
    "Aluminio",
    "Hierro",
    "Laton",
];
 
   

 function calcularPeso(ladoAvalue, ladoBvalue, largoValue, densidad) {
    const pesoMaterial = densidad * (ladoAvalue * ladoBvalue) * largoValue;

    return pesoMaterial;
    // peso = densidad * longitud * seccion;
   // const pesoMaterialmm = pesoMaterial / 1000000000; // para el calculo de mm es; 0.000007850
   // return pesoMaterialmm;
 }

function calcularPeso2(inputUmValue) {
    if (inputUmValue = um[0]) {
        const pesoMaterial2 = pesoMaterial * 1000000000;
        return pesoMaterial2;
    }else if (inputUmValue = um[1]) {
        const pesoMaterial2 = pesoMaterial * 1;
        return pesoMaterial2;
    } 

    return pesoMaterial2;
    
}

 
  
 function onClickbutton() {
     const inputLadoA = document.getElementById("inputLadoA");
     const ladoAvalue = inputLadoA.value;

     const inputLadoB = document.getElementById("inputLadoB");
     const ladoBvalue = inputLadoB.value;

     const inputLargo = document.getElementById("inputLargo");
     const largoValue = inputLargo.value;

     const inputUm = document.getElementById("inputUm");
     const inputUmValue = inputUm.value;
 
     const inputMaterial = document.getElementById("inputMaterial");
     const materialValue = inputMaterial.value;
 
     let densidad;
     
 
     
     switch(materialValue) {
       case material[0]: //"aca se evidencia cuando declaramos las constantes arriba empiezan desde el 0, 1 y 2, osea Barby es el 0"
       densidad = 0.000007850; // para el calculo de mm es; 0.000007850
       break;
       case material[1]: // aluminio
       densidad = 0.000002700;
       break;
       case material[2]: //hierro
       densidad = 0.000007300;
       break;
       case material[3]: //laton
       densidad = 0.000008560;
       break; 
    }
 
     
     const pesoMaterial = calcularPeso(ladoAvalue, ladoBvalue, largoValue, densidad);
     
     switch(inputUmValue) {
        case um[0]: 
        pesoMaterial2 = pesoMaterial * 1;  // para el calculo de mm es; 0.000007850
        break;
        case um[1]: 
        pesoMaterial2 = pesoMaterial * 1000;  // para el calculo de mm es; 0.000007850
        break;
        case um[2]: 
        pesoMaterial2 = pesoMaterial * 1000000000;  // para el calculo de mm es; 0.000007850
        break;
        
     }
     
     var conDecimal = pesoMaterial2.toFixed(2); 
      
     const ResultP = document.getElementById ("ResultP");
     ResultP.innerText = "El peso del material es: " + conDecimal + " Kgs"; 
     }
 