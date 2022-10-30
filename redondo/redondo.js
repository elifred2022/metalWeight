const unitMeasure = [
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

const material2 =
{
  'Acero': '0.000007850',
  'Aluminio': '0.000002700',
  'Hierro': '0.000007300',
  'Laton': '0.000008560'
};

function calcularPeso(diametroAvalue, largoValue, densidad) {
  const pesoMaterial = densidad * largoValue * (3.14 * diametroAvalue * diametroAvalue / 4);
  return pesoMaterial;
  // peso = densidad * longitud * seccion;

  // const pesoMaterialmm = pesoMaterial / 1000000000; // para el calculo de mm es; 0.000007850
  // return pesoMaterialmm;
}



function onClickbutton() {
  const inputLadoDiametro = document.getElementById("inputLadoDiametro");
  const diametroAvalue = inputLadoDiametro.value;

  const inputLargo = document.getElementById("inputLargo");
  const largoValue = inputLargo.value;

  const inputUm = document.getElementById("inputUm");
  const inputUmValue = inputUm.value;

  const inputMaterial = document.getElementById("inputMaterial");
  const materialValue = inputMaterial.value;

  let densidad;

 /* CODIGO MUESTRA DEL MUÑECO 
  if (material[0] === materialValue) {
    console.log("DENTRO DEL IF, materialValue: ", materialValue)
    
    return materialValue
  }
  else console.log("Not found")
  console.log("MAMAGUEVO") */

  switch (materialValue) {
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


  const pesoMaterial = calcularPeso(diametroAvalue, largoValue, densidad);

  switch (inputUmValue) {
    case unitMeasure[0]:
      pesoMaterial2 = pesoMaterial * 1;  // para el calculo de mm es; 0.000007850
      break;
    case unitMeasure[1]:
      pesoMaterial2 = pesoMaterial * 1000;  // para el calculo de mm es; 0.000007850
      break;
    case unitMeasure[2]:
      pesoMaterial2 = pesoMaterial * 1000000000;  // para el calculo de mm es; 0.000007850
      break;

  }

  var conDecimal = pesoMaterial2.toFixed(2);

  const ResultP = document.getElementById("ResultP");
  ResultP.innerText = "El peso del material es: " + conDecimal + " Kgs";
}