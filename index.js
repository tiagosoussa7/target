
/*---------------------------questão 1°-----------------------*/

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
/*resposta 91*/
/*----------------------questão 2°-------------------------------*/

function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let c;

    // Se o número informado for 0 ou 1, ele está na sequência de Fibonacci
    if (numero === 0 || numero === 1) return true;

    // Gera a sequência de Fibonacci até ultrapassar o número informado
    while (true) {
        c = a + b;

        if (c === numero) return true;

        else if (c > numero) return false;
        
        a = b;
        b = c;
    }
}

const numeroVerificar = 13;

if (verificaFibonacci(numeroVerificar)) console.log(numeroVerificar + " pertence à sequência de Fibonacci.");

else console.log(numeroVerificar + " não pertence à sequência de Fibonacci.");

/*----------------------questão 3°-------------------------------*/

/* a- 1, 3, 5, 7, _9_
progressão aritmética com diferença constante de 2.*/

/* b- 2, 4, 8, 16, 32, 64, __128__
progressão geométrica onde cada termo é o dobro do termo anterior.*/

/* c- 0, 1, 4, 9, 16, 25, 36, __49__
quadrados dos números naturais começando do 0.*/

/* d- 4, 16, 36, 64, __100__
quadrados dos números pares começando do 2.*/

/* e- 1, 1, 2, 3, 5, 8, __13__
sequência de Fibonacci.*/

/* f- 2,10, 12, 16, 17, 18, 19, __20__
não segue um padrão.*/

/*----------------------questão 4°-------------------------------*/

/* 
Primeira ida:

1° - eu ligaria um interruptor, deixaria ligado por alguns minutos e depois desligaria.
2° - ligaria um segundo interruptor e deixaria ligado.
3° - iria na sala das lâmpadas

Segunda ida:

1°- iria ver qual lâmpada está acesa e saberia que ela está conectada ao interruptor que eu deixei ligado na primeira vez.
2° a lâmpada que está apagada, mas está quente, é a que está conectada com o primeiro interruptor que liguei e deixei passar alguns minutos ante de desligar.
3° a lâmpada que está apagada e fria está conectada com o interruptor que eu nunca liguei.

*/

/*----------------------questão 5°-------------------------------*/

function inverteString(str) {
    let resultado = '';

    for (let i = str.length - 1; i >= 0; i--) resultado += str[i];

    return resultado;
}


const minhaString = "palavra invertida";


console.log("String original:", minhaString);
console.log("String invertida:", inverteString(minhaString));