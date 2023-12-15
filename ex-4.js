function ehPalindromo(PALAVRA) {

    PALAVRA = PALAVRA.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return PALAVRA === PALAVRA.split("").reverse().join("");
  }
console.clear();
console.log(ehPalindromo("rarar"));

// A Função recebe a palava como PALAVRA e tira todos os espaços, pontuações e numeros com o Replace.
// depois ela transforma tudo em minusculo com o toLowerCase() para não gerar erros. então ela compara a PALAVRA
// com a PALAVRA invertida e verifica se sao iguais.