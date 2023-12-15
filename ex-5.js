function somaImpares(listaDeNumeros) {
  let somaImpares = 0;
  let Impares = [];
  for (let i of listaDeNumeros) {
    if (i % 2 !== 0) {
      somaImpares += i;
      Impares.push(i);
    }
  }
  return `${somaImpares} (${Impares.join(' + ')})`;
}

const numeros = [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const soma = somaImpares(numeros);
console.clear();
console.log(soma); // Output: 9 (1 + 3 + 5)

// soma recebe os numero da lista que manda para o for que percorer cada item da lista para ver se é impar,
// logo depois somaImpares soma os impares e imprime o resultado, e o numero que estar atribuido a [i]
// é botado na array usando push(). dps é retornado o resultado return `${somaImpares} (${Impares.join(' + ')})`
// usando o join() para concatenar os numeros e botar os + entre eles.

