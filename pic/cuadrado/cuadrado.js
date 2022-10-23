const material = [
    "Acero",
    "Aluminio",
    "Hierro",
    "Laton",
];
 
   
 
 function calcularPeso(ladoAvalue, ladoBvalue, largoValue, densidad) {
     const pesoMaterial = densidad * (ladoAvalue * ladoBvalue) * largoValue;
     const pesoMaterialmm = pesoMaterial / 1000000000;

     // peso = densidad * longitud * seccion;
 
    return pesoMaterialmm;
}
 
  
 function onClickbutton() {
     const inputLadoA = document.getElementById("inputLadoA");
     const ladoAvalue = inputLadoA.value;

     const inputLadoB = document.getElementById("inputLadoB");
     const ladoBvalue = inputLadoB.value;

     const inputLargo = document.getElementById("inputLargo");
     const largoValue = inputLargo.value;
 
     const inputMaterial = document.getElementById("inputMaterial");
     const materialValue = inputMaterial.value;
 
     let densidad;
 
     
     switch(materialValue) {
       case material[0]: //"aca se evidencia cuando declaramos las constantes arriba empiezan desde el 0, 1 y 2, osea Barby es el 0"
       densidad = 7850; // para el calculo de mm es; 0.000007850
       break;
       case material[1]: // aluminio
       densidad = 2700;
       break;
       case material[2]: //hierro
       densidad = 7300;
       break;
       case material[3]: //laton
       densidad = 8560;
       break; 
    }
 
     
     const pesoMaterialmm = calcularPeso(ladoAvalue, ladoBvalue, largoValue, densidad);
 
     const ResultP = document.getElementById ("ResultP");
     ResultP.innerText = "El peso del material es: Kgs" + pesoMaterialmm; 
     }
 