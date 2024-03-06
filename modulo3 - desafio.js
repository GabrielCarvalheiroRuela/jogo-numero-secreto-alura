console.log('------------------------------------------');
console.log('-          DESAFIOS MODULO 3             -');
console.log('------------------------------------------');

// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let altura = 1.75;
let peso = 63;
function calcularIMC (altura, peso) {
    return peso / (altura * altura);
}
console.log(calcularIMC(altura, peso));

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let numero = 3;
function calcularFatorial (numero) {
    let resultado = 1;
    while (numero > 0){
        resultado = resultado * numero;
        numero--;
    }
    return resultado;
}
console.log(calcularFatorial(numero));

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let valorReais = 50;
let dolar = 4.80;
function calcularDolar (dolar) {
    let valorEmDolar = valorReais * dolar;
    return valorEmDolar;
}
console.log(calcularDolar(dolar));

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let largura = 25;
altura = 50;

function calcularSala(largura, altura) {
    let area = largura * altura;
    let perimetro = largura + altura;
    console.log(`A area da sala é ${area} metros quadrados.`);
    console.log(`O perímetro da sala é ${perimetro} metros.`);
}
calcularSala(largura, altura);

// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let raio = 3;

function calcularAreaDoCirculo (raio) {
    area = 3.14 * (raio * raio);
    console.log(`A área do círculo é ${area} metros.`);
}

calcularAreaDoCirculo(raio);

// 6 -Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
numero = parseInt(Math.random() * 10 + 1);
function tabuada (numero) {
    let contador = 1;
    while (contador <= 10) {
        console.log(`${contador} * ${numero} = ${contador * numero}`);
        contador++;
    }
}
tabuada(numero);