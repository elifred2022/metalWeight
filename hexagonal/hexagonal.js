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
  
   // raiz cuadrada de 3 = 1,73205080757
   // se calculo la seccion = raiz cuadrada de 3 / 2 * altura * altura
  
  function calcularPeso(alturaValue, largoValue, densidad) {
    const pesoMaterial = densidad * largoValue * (0.866 * alturaValue * alturaValue);
  
    return pesoMaterial;
    // peso = densidad * longitud * seccion;
  
   // const pesoMaterialmm = pesoMaterial / 1000000000; // para el calculo de mm es; 0.000007850
   // return pesoMaterialmm;
  }
  
  
  
  
  
  function onClickbutton() {
     const inputLadoAltura = document.getElementById("inputLadoAltura");
     const alturaValue = inputLadoAltura.value;
  
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
  
     
     const pesoMaterial = calcularPeso(alturaValue, largoValue, densidad);
     
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
  