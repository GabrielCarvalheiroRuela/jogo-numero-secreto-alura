console.log('------------------------------------------');
console.log('-          DESAFIOS MODULO 2             -');
console.log('------------------------------------------');

// 1 Criar uma função que exibe "Olá, mundo!" no console.
function cumprimentar(){
    console.log('Olá mundo!');
}
cumprimentar();

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = 'gabriel';
function exibirNome () {
    console.log('Olá ' + nome);
}
exibirNome(nome);

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let n = 5;
function dobraNumero (n) {
    return n * 2;
}
console.log(dobraNumero(n));

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
let n1 = 2, n2 = 4, n3 = 6;
function mediaNumeros (n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
console.log(mediaNumeros(n1, n2, n3));

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
n1 = 3, n2 = 1;
function maiorNumero (n1, n2){
    return n1>n2 ? n1 : n2;
}
console.log(maiorNumero(n1, n2));

// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
n = 5;
function raizQuadrada (n) {
    return n *= n;
}
console.log(raizQuadrada(n));