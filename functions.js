//Functions of question01


const sum = (i, k, soma) => {
  

    while (k < i) {
        k = k + 1
        soma = soma + k
    }

    let text1 = document.querySelector("#text1");

    text1.textContent = `Avariável SOMA terá o valor de ${soma} quando o indice for igual a ${i}.`
}

sum(13, 0, 0)


//Functions of question02
const seqFibonacci = () => {
    let number = parseInt(document.getElementById('numFibonacci').value) 
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    
    for (var i = 2; i < 50; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    
    let text2 = document.querySelector("#text2");

    if (fibonacci.indexOf(number) === -1) {
        
        text2.textContent = `O numero ${number} NÃO pertence a sequência de Fibonacci`
           
    } else {
        text2.textContent = `O numero ${number} pertence a sequência de Fibonacci`
    }
     
} 

//Functions of question05

const reverseString = () => {
    let string = document.getElementById('string').value;
    
    let invertString = string.split("").reverse().join("");

    let resInvert = document.querySelector("#resInvert");
    resInvert.textContent = `O inverso da palavra é ${invertString.toUpperCase()}.`
    
}