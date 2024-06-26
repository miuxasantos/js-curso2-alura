// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
};

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
		exibirTextoNaTela('p', mensagemTentativa);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            ExibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
    }
    console.log(chute === numeroSecreto);
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}