// Gera uma lista com todos os elementos que tem a classe "botao"
const botoes = document.querySelectorAll (".botao");
const personagem = document.querySelectorAll (".personagem");

// faz um loop para cada item da lista
botoes.forEach ((botao, i) => {
	// adiciona um listener que vai esperar por um evento, nesse caso um click
	botao.addEventListener ("click", () => {

		desselecionarElementoPorTipo(".botao.selecionado");
		desselecionarElementoPorTipo(".personagem.selecionado");
		selecionaElementoPorTipo (botao);
		selecionaElementoPorTipo (personagem[i]);
	});
});

function desselecionarElementoPorTipo (tipo) {
	// atribui o elemento que tem as classes "botao" e "selecionado"
	const botaoSelecionado = document.querySelector(tipo);
	// remove a classe "selecionado" do elemento que a possui
	botaoSelecionado.classList.remove("selecionado");
}

function selecionaElementoPorTipo (tipo) {
	// adiciona a classe "selecionado" ao elemento que passou pelo evento
	tipo.classList.add ("selecionado");
}

