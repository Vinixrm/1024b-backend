
/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código

function criaNovoVetor(vetor: number[], valor1: number, valor2: number): number[] {
  return [...vetor, valor1, valor2];
}

//Fim do seu código

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código

function divisivelPor11(min: number, max: number): number[] {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    if (i % 11 === 0) {
      result.push(i);
    }
  }
  return result;
}

//Fim do seu código

/**
 * Exercício 03 - Calcular média de três números
 * Nome da função - calcularMedia
 * Crie uma função que receba três números e retorne a média aritmética entre eles.
 * @param {number} a Primeiro número
 * @param {number} b Segundo número
 * @param {number} c Terceiro número
 * @returns {number} Retorna a média dos três números
 * @example
 * calcularMedia(2, 4, 6) // 4
 * calcularMedia(10, 20, 30) // 20
 */

//Início do seu código

function calcularMedia(a: number, b: number, c: number): number {
  return (a + b + c) / 3;
}

//Fim do seu código

 