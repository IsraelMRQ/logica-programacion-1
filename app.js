// 1. Solicitar los números al usuario y convertirlos a tipo Número
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

// 2. Verificar que los datos ingresados sean realmente números válidos
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.error("Error: Por favor, recarga la página e ingresa solo números.");
} else {
  // 3. Verificar si los 3 números son iguales
  if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.");
    console.log("Números ingresados: " + num1 + ", " + num2 + ", " + num3);
  } else {
    // 4. Analizar e identificar mayor, centro y menor
    // Colocamos los números en un arreglo (lista) para manipularlos fácilmente
    let numeros = [num1, num2, num3];

    // Creamos una copia del arreglo y la ordenamos de MAYOR a MENOR
    // La fórmula (b - a) le dice a JavaScript que ordene de forma descendente
    let deMayorAMenor = [...numeros].sort((a, b) => b - a);

    // Creamos otra copia y la ordenamos de MENOR a MAYOR
    // La fórmula (a - b) ordena de forma ascendente
    let deMenorAMayor = [...numeros].sort((a, b) => a - b);

    // Extraemos los valores ya ordenados para identificarlos
    let numeroMayor = deMayorAMenor[0];
    let numeroCentro = deMayorAMenor[1];
    let numeroMenor = deMayorAMenor[2];

    // 5. Imprimir los resultados en la consola
    console.log("---  ---");
    console.log("Número mayor: " + numeroMayor);
    console.log("Número del centro: " + numeroCentro);
    console.log("Número menor: " + numeroMenor);

    console.log("Ordenados de mayor a menor: " + deMayorAMenor.join(", "));
    console.log("Ordenados de menor a mayor: " + deMenorAMayor.join(", "));
  }
}
