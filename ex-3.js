function filtrarStringsCurtas(strings, tamanhoMinimo) {
    let stringss = strings.filter(string => string.length >= tamanhoMinimo);
    console.log(stringss);
}

const palavras = ["sol", "lua", "estrela", "planeta", "galáxia"];
const resultado = filtrarStringsCurtas(palavras, 5);

// resposta: (c) [ 'estrela', 'planeta', 'galáxia' ]
// A stringss cria uma array com as palavras filtradas pelo tamanhoMinimo que no caso é 5,
// as palavras com menos de 5 letras não serão retornadas, ou no meu caso não são postas no console.log