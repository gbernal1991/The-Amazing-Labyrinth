// Classe Dos Jogadores
class Player {
	constructor(posicao) {
      this.posicao = posicao;
      this.turno;
      this.cor;
    }

    setTurno(turno) {
    	this.turno = turno;
    }

    setColor(cor) {
    	this.cor = cor;
    }
}

// Posições Móveis do Tabuleiro
var posicoes = [2,4,6,10,11,12,13,14,15,16,20,22,24,28,29,30,31,32,33,34,38,40,42,46,47,48,49,50,51,52,56,58,60];

// Inicializando variavel 'pecas' que receberá números correspondentes as pecas
var pecas = [];

// PECAS COM TESOUROS
for (var j = 0; j < 12; j++) 
	pecas[j] = j;

// PECA L
for (j = 12; j < 21; j++) 
	pecas[j] = 12;

// PECA NORMAL
for (j = 21; j < 34; j++) 
	pecas[j] = 13;
	
// Embaralhando Pecas (ACHO QUE ESTOU EMBARALHANDO DUAS VEZES)
// BASTAVA ESCREVER QUE O randomizarTabuleiro já embaralha a listaEmbaralhada
// var listaEmbaralhada = pecas;
var listaEmbaralhada = pecas.sort(randOrd);

// Containers Principais
var div = document.querySelector("#container");
var subContainer = document.querySelector("#subContainer");

// Funçoes para Saber Numero de jogadores, desenhar tabuleiro inicial e Configurar posicao, turnos e cores dos jogadores
var jogadores = preStart();
init(jogadores);
var listaPlayers = setting(jogadores);

// Para Jogadores poderem andar
var divNova = document.querySelectorAll(".quadrados");

// Set Turno 1
var turno = 1;

// Peça Que Sobrou depois de embaralhar
var pecaRestante = listaEmbaralhada[0];

// Criando peçaGirante
var divCard = document.createElement("div");
subContainer.appendChild(divCard);
divCard.className = "quadrados rotate";
divCard.style.margin = "10px 10px";

// Para ADD playerBox para PeçaGirante
var divNova2 = document.createElement("div");

// Identificar Carta Sobrante
if (pecaRestante == 13) { 
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/caminho_V.png')";
	}
if (pecaRestante == 12) {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/caminho_L1.png')";
	}
if (pecaRestante == 0)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/princesa.png')";
	}
if (pecaRestante == 1)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/morcego.png')";
	}			
if (pecaRestante == 2)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/menino.png')";
	}			
if (pecaRestante == 3)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/dragao.png')";
	}			
if (pecaRestante == 4)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/fantasma.png')";
	}			
if (pecaRestante == 5)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/fantasma_na_garrafa.png')";
	}			
if (pecaRestante == 6)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/coruja.png')";
	}			
if (pecaRestante == 7)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/besouro.png')";
	}			
if (pecaRestante == 8)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/libelula.png')";
	}			
if (pecaRestante == 9)  {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/rato.png')";
	}			
if (pecaRestante == 10) {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/lagarto.png')";
	}
if (pecaRestante == 11) {
	divCard.appendChild(divNova2);
	divNova2.className = "player-box";
	divCard.style.backgroundImage = "url('img/aranha.png')";
	}

// console.log("DivCard: ", divCard);

function limparSetas() {
	let esqBaixo = document.querySelector(".esq-baixo");
	let esqCima = document.querySelector(".esq-cima");

	let baixo = document.querySelector(".baixo");
	let cima = document.querySelector(".cima");

	let dirBaixo = document.querySelector(".dir-baixo");
	let dirCima = document.querySelector(".dir-cima");

	let dCima = document.querySelector(".d-cima");
	let eCima = document.querySelector(".e-cima");

	let dBaixo = document.querySelector(".d-baixo");
	let eBaixo = document.querySelector(".e-baixo");

	let dMeio = document.querySelector(".d-meio");
	let eMeio = document.querySelector(".e-meio");


		if (esqBaixo.style.borderColor == "transparent transparent red")
			esqBaixo.style.borderColor = "transparent transparent yellow";

		if (esqCima.style.borderColor == "red transparent transparent")
			esqCima.style.borderColor = "yellow transparent transparent";

		if (baixo.style.borderColor == "transparent transparent red")
			baixo.style.borderColor = "transparent transparent yellow";

		if (cima.style.borderColor == "red transparent transparent")
			cima.style.borderColor = "yellow transparent transparent";

		if (dirBaixo.style.borderColor == "transparent transparent red")
			dirBaixo.style.borderColor = "transparent transparent yellow";

		if (dirCima.style.borderColor == "red transparent transparent")
			dirCima.style.borderColor = "yellow transparent transparent";

		if (dCima.style.borderColor == "transparent transparent transparent red")
			dCima.style.borderColor = "transparent transparent transparent yellow";

		if (eCima.style.borderColor == "transparent red transparent transparent")
			eCima.style.borderColor = "transparent yellow transparent transparent";

		if (dBaixo.style.borderColor == "transparent transparent transparent red")
			dBaixo.style.borderColor = "transparent transparent transparent yellow";

		if (eBaixo.style.borderColor == "transparent red transparent transparent")
			eBaixo.style.borderColor = "transparent yellow transparent transparent";

		if (dMeio.style.borderColor == "transparent transparent transparent red")
			dMeio.style.borderColor = "transparent transparent transparent yellow";

		if (eMeio.style.borderColor == "transparent red transparent transparent")
			eMeio.style.borderColor = "transparent yellow transparent transparent";

}

// Girar Carta Sobrante
$("#girarCard").click(function () {

	if(divCard.style.backgroundImage == 'url("img/caminho_V.png")') 
		divCard.style.backgroundImage = "url('img/caminho_H.png')";

	else if(divCard.style.backgroundImage == 'url("img/caminho_H.png")') 
		divCard.style.backgroundImage = "url('img/caminho_V.png')";


	else if(divCard.style.backgroundImage == 'url("img/caminho_L1.png")') 
		divCard.style.backgroundImage = "url('img/caminho_L2.png')";

	else if(divCard.style.backgroundImage == 'url("img/caminho_L2.png")') 
		divCard.style.backgroundImage = "url('img/caminho_L3.png')";

	else if(divCard.style.backgroundImage == 'url("img/caminho_L3.png")') 
		divCard.style.backgroundImage = "url('img/caminho_L4.png')";

	else if(divCard.style.backgroundImage == 'url("img/caminho_L4.png")') 
		divCard.style.backgroundImage = "url('img/caminho_L1.png')";


	else if(divCard.style.backgroundImage == 'url("img/aranha.png")') 
		divCard.style.backgroundImage = "url('img/aranha_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/aranha_2.png")') 
		divCard.style.backgroundImage = "url('img/aranha_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/aranha_3.png")') 
		divCard.style.backgroundImage = "url('img/aranha_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/aranha_4.png")') 
		divCard.style.backgroundImage = "url('img/aranha.png')";


	else if(divCard.style.backgroundImage == 'url("img/besouro.png")') 
		divCard.style.backgroundImage = "url('img/besouro_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/besouro_2.png")') 
		divCard.style.backgroundImage = "url('img/besouro_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/besouro_3.png")') 
		divCard.style.backgroundImage = "url('img/besouro_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/besouro_4.png")') 
		divCard.style.backgroundImage = "url('img/besouro.png')";


	else if(divCard.style.backgroundImage == 'url("img/lagarto.png")') 
		divCard.style.backgroundImage = "url('img/lagarto_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/lagarto_2.png")') 
		divCard.style.backgroundImage = "url('img/lagarto_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/lagarto_3.png")') 
		divCard.style.backgroundImage = "url('img/lagarto_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/lagarto_4.png")') 
		divCard.style.backgroundImage = "url('img/lagarto.png')";


	else if(divCard.style.backgroundImage == 'url("img/rato.png")') 
		divCard.style.backgroundImage = "url('img/rato_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/rato_2.png")') 
		divCard.style.backgroundImage = "url('img/rato_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/rato_3.png")') 
		divCard.style.backgroundImage = "url('img/rato_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/rato_4.png")') 
		divCard.style.backgroundImage = "url('img/rato.png')";


	else if(divCard.style.backgroundImage == 'url("img/libelula.png")') 
		divCard.style.backgroundImage = "url('img/libelula_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/libelula_2.png")') 
		divCard.style.backgroundImage = "url('img/libelula_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/libelula_3.png")') 
		divCard.style.backgroundImage = "url('img/libelula_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/libelula_4.png")') 
		divCard.style.backgroundImage = "url('img/libelula.png')";


	else if(divCard.style.backgroundImage == 'url("img/coruja.png")') 
		divCard.style.backgroundImage = "url('img/coruja_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/coruja_2.png")') 
		divCard.style.backgroundImage = "url('img/coruja_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/coruja_3.png")') 
		divCard.style.backgroundImage = "url('img/coruja_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/coruja_4.png")') 
		divCard.style.backgroundImage = "url('img/coruja.png')";


	else if(divCard.style.backgroundImage == 'url("img/fantasma_na_garrafa.png")') 
		divCard.style.backgroundImage = "url('img/fantasma_na_garrafa_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/fantasma_na_garrafa_2.png")') 
		divCard.style.backgroundImage = "url('img/fantasma_na_garrafa_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/fantasma_na_garrafa_3.png")') 
		divCard.style.backgroundImage = "url('img/fantasma_na_garrafa_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/fantasma_na_garrafa_4.png")') 
		divCard.style.backgroundImage = "url('img/fantasma_na_garrafa.png')";



	else if(divCard.style.backgroundImage == 'url("img/fantasma.png")') 
		divCard.style.backgroundImage = "url('img/fantasma_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/fantasma_2.png")') 
		divCard.style.backgroundImage = "url('img/fantasma_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/fantasma_3.png")') 
		divCard.style.backgroundImage = "url('img/fantasma_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/fantasma_4.png")') 
		divCard.style.backgroundImage = "url('img/fantasma.png')";



	else if(divCard.style.backgroundImage == 'url("img/dragao.png")') 
		divCard.style.backgroundImage = "url('img/dragao_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/dragao_2.png")') 
		divCard.style.backgroundImage = "url('img/dragao_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/dragao_3.png")') 
		divCard.style.backgroundImage = "url('img/dragao_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/dragao_4.png")') 
		divCard.style.backgroundImage = "url('img/dragao.png')";


	else if(divCard.style.backgroundImage == 'url("img/menino.png")') 
		divCard.style.backgroundImage = "url('img/menino_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/menino_2.png")') 
		divCard.style.backgroundImage = "url('img/menino_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/menino_3.png")') 
		divCard.style.backgroundImage = "url('img/menino_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/menino_4.png")') 
		divCard.style.backgroundImage = "url('img/menino.png')";


	else if(divCard.style.backgroundImage == 'url("img/morcego.png")') 
		divCard.style.backgroundImage = "url('img/morcego_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/morcego_2.png")') 
		divCard.style.backgroundImage = "url('img/morcego_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/morcego_3.png")') 
		divCard.style.backgroundImage = "url('img/morcego_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/morcego_4.png")') 
		divCard.style.backgroundImage = "url('img/morcego.png')";


	else if(divCard.style.backgroundImage == 'url("img/princesa.png")') 
		divCard.style.backgroundImage = "url('img/princesa_2.png')";

	else if(divCard.style.backgroundImage == 'url("img/princesa_2.png")') 
		divCard.style.backgroundImage = "url('img/princesa_3.png')";

	else if(divCard.style.backgroundImage == 'url("img/princesa_3.png")') 
		divCard.style.backgroundImage = "url('img/princesa_4.png')";

	else if(divCard.style.backgroundImage == 'url("img/princesa_4.png")') 
		divCard.style.backgroundImage = "url('img/princesa.png')";
})

// Botoes (Setas)
$(".esq-cima").click(function (){
	var subMsg = document.querySelector("#subMsg");
	let esqBaixo = document.querySelector(".esq-baixo");
	let esqCima = document.querySelector(".esq-cima");

	if (esqCima.style.borderColor != "red transparent transparent" 
		&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

		limparSetas();

		esqBaixo.style.borderColor = "transparent transparent red";
		divCardImg = drawBoard(divCard, 56, "cima");
		divCard.style.backgroundImage = divCardImg;


	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	 else { 
	 	// alert("BOTAO VERMELHO")
	 	 }
})
$(".esq-baixo").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let esqBaixo = document.querySelector(".esq-baixo");
	let esqCima = document.querySelector(".esq-cima");

   if(esqBaixo.style.borderColor != "transparent transparent red" 
   	&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

   		limparSetas();

		esqCima.style.borderColor = "red transparent transparent";
		divCardImg = drawBoard(divCard, 2, "baixo");
		divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	 else { 
	 	// alert("BOTAO VERMELHO")
	 	 }
})
$(".cima").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let baixo = document.querySelector(".baixo");
	let cima = document.querySelector(".cima");
	
	if(cima.style.borderColor != "red transparent transparent" 
		&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

		limparSetas();

		baixo.style.borderColor = "transparent transparent red";
		divCardImg = drawBoard(divCard, 58, "cima");
		divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	 else { 
	 	// alert("BOTAO VERMELHO")
	 	 }
})
$(".dir-cima").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let dirBaixo = document.querySelector(".dir-baixo");
	let dirCima = document.querySelector(".dir-cima");

		if(dirCima.style.borderColor != "red transparent transparent" 
			&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

			limparSetas();

		dirBaixo.style.borderColor = "transparent transparent red";
		divCardImg = drawBoard(divCard, 60, "cima");
		divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO"); 

	else { 
		// alert("BOTAO VERMELHO")
		 }
})
$(".baixo").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let baixo = document.querySelector(".baixo");
	let cima = document.querySelector(".cima");

		if(baixo.style.borderColor != "transparent transparent red" 
			&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

			limparSetas();

		cima.style.borderColor = "red transparent transparent";
		divCardImg = drawBoard(divCard, 4, "baixo");
		divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	 else { 
	 	// alert("BOTAO VERMELHO")
	 	 }
})
$(".dir-baixo").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let dirBaixo = document.querySelector(".dir-baixo");
	let dirCima = document.querySelector(".dir-cima");

		if(dirBaixo.style.borderColor != "transparent transparent red" 
			&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

			limparSetas();

		dirCima.style.borderColor = "red transparent transparent";
		divCardImg = drawBoard(divCard, 6, "baixo");
		divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	else { 
		// alert("BOTAO VERMELHO")
		 }
})
$(".d-cima").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let dCima = document.querySelector(".d-cima");
	let eCima = document.querySelector(".e-cima");

		if(dCima.style.borderColor != "transparent transparent transparent red" 
			&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

			limparSetas();

			eCima.style.borderColor = "transparent red transparent transparent";
			divCardImg = drawBoard(divCard, 16, "esquerda");
			divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	else { 
		// alert("BOTAO VERMELHO")
		 }
})
$(".d-meio").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let dMeio = document.querySelector(".d-meio");
	let eMeio = document.querySelector(".e-meio");

		if(dMeio.style.borderColor != "transparent transparent transparent red" 
			&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

			limparSetas();

			eMeio.style.borderColor = "transparent red transparent transparent";
			divCardImg = drawBoard(divCard, 34, "esquerda");
			divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	else { 
		// alert("BOTAO VERMELHO")
		 }
})
$(".d-baixo").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let dBaixo = document.querySelector(".d-baixo");
	let eBaixo = document.querySelector(".e-baixo");

		if(dBaixo.style.borderColor != "transparent transparent transparent red" 
			&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

			limparSetas();

			eBaixo.style.borderColor = "transparent red transparent transparent";
			divCardImg = drawBoard(divCard, 52, "esquerda");
			divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	else { 
		// alert("BOTAO VERMELHO")
		 }
})
$(".e-cima").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let dCima = document.querySelector(".d-cima");
	let eCima = document.querySelector(".e-cima");

		if(eCima.style.borderColor != "transparent red transparent transparent" 
			&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

			limparSetas();

			dCima.style.borderColor = "transparent transparent transparent red";
			divCardImg = drawBoard(divCard, 10, "direita");
			divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	else { 
		// alert("BOTAO VERMELHO")
		 }
})
$(".e-meio").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let dMeio = document.querySelector(".d-meio");
	let eMeio = document.querySelector(".e-meio");

		if(eMeio.style.borderColor != "transparent red transparent transparent" 
			&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

			limparSetas();

			dMeio.style.borderColor = "transparent transparent transparent red";
			divCardImg = drawBoard(divCard, 28, "direita");
			divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	else { 
		// alert("BOTAO VERMELHO")
		 }
})
$(".e-baixo").click(function () {
	var subMsg = document.querySelector("#subMsg");
	let dBaixo = document.querySelector(".d-baixo");
	let eBaixo = document.querySelector(".e-baixo");

		if(eBaixo.style.borderColor != "transparent red transparent transparent" 
			&& subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

			limparSetas();

			dBaixo.style.borderColor = "transparent transparent transparent red";
			divCardImg = drawBoard(divCard, 46, "direita");
			divCard.style.backgroundImage = divCardImg;

	} else if(subMsg.textContent == "MOVA O PERSONAGEM OU PASSE O TURNO")
		alert("MOVA O PERSONAGEM OU PASSE O TURNO");

	else { 
		// alert("BOTAO VERMELHO")
		 }
})

// Andar Personagem
for(var g = 0; g < divNova.length; g++) {
	var id = divNova[g].addEventListener("click", function() {

	var subMsg = document.querySelector("#subMsg");

	if(subMsg.textContent != "MOVA O TABULEIRO") {
				
			var divNova  = document.createElement("div");
			var divNova2  = document.createElement("div");

			var id = this.id;
			// Ver a vez de quem joga
			// Verificar se pode andar até o lugar que quer
			// Atraves de um id colocado em cada quadrado
			var div = document.querySelectorAll(".quadrados");
			for(var i = 0; i < div.length; i++) {

				if(id == 0 || id == 8 || id == 9 || id == 17 || id == 18 ||
				   id == 26 || id == 27 || id == 35 || id == 36 || id == 44 ||
				   id == 45 || id == 53 || id == 54 || id == 62) {}


				else {	
					if (id === div[i].id) {

						// div[i].appendChild(divNova);

						if(div[i].hasChildNodes()) {

							// console.log(div[i].childNodes[0]);
							div[i].childNodes[0].appendChild(divNova2);
						}
						else {

							divNova.className = "player-box";
							divNova.appendChild(divNova2);
						}

						if (jogadores == 4) {
							if (turno == 1 || turno % 4 == 1) {
								// Verificar o players.turno para saber quem é o 1,2,3,4
								// Para deletar também o antigo
								// Passar nova posicao
								// código abaixo para teste
								if (listaPlayers[0].Turno == 1) {  
									var posicao = parseInt(listaPlayers[0].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-red";
									listaPlayers[0].Posicao = div[i].id;
								}
								if (listaPlayers[1].Turno == 1) {
									var posicao = parseInt(listaPlayers[1].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-blue";
									listaPlayers[1].Posicao = div[i].id;
								}
								if (listaPlayers[2].Turno == 1) {
									var posicao = parseInt(listaPlayers[2].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-green";
									listaPlayers[2].Posicao = div[i].id;
								}
								if (listaPlayers[3].Turno == 1) {
									var posicao = parseInt(listaPlayers[3].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-yellow";
									listaPlayers[3].Posicao = div[i].id;
								}

							} else if (turno == 2 || turno % 4 == 2) {
							 	if (listaPlayers[0].Turno == 2) {
									var posicao = parseInt(listaPlayers[0].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-red";
									listaPlayers[0].Posicao = div[i].id;
								}
								if (listaPlayers[1].Turno == 2) {
									var posicao = parseInt(listaPlayers[1].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-blue";
									listaPlayers[1].Posicao = div[i].id;
								}
								if (listaPlayers[2].Turno == 2) {
									var posicao = parseInt(listaPlayers[2].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-green";
									listaPlayers[2].Posicao = div[i].id;
								}
								if (listaPlayers[3].Turno == 2) {
									var posicao = parseInt(listaPlayers[3].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-yellow";
									listaPlayers[3].Posicao = div[i].id;
								}
							} else if (turno == 3 || turno % 4 == 3) {
							 	if (listaPlayers[0].Turno == 3) {
									var posicao = parseInt(listaPlayers[0].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-red";
									listaPlayers[0].Posicao = div[i].id;
								}
								if (listaPlayers[1].Turno == 3) {
									var posicao = parseInt(listaPlayers[1].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-blue";
									listaPlayers[1].Posicao = div[i].id;
								}
								if (listaPlayers[2].Turno == 3) {
									var posicao = parseInt(listaPlayers[2].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-green";
									listaPlayers[2].Posicao = div[i].id;
								}
								if (listaPlayers[3].Turno == 3) {
									var posicao = parseInt(listaPlayers[3].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-yellow";
									listaPlayers[3].Posicao = div[i].id;
								}
							} else if (turno == 4 || turno % 4 == 0) {
							 	if (listaPlayers[0].Turno == 4) {
									var posicao = parseInt(listaPlayers[0].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-red";
									listaPlayers[0].Posicao = div[i].id;
								}
								if (listaPlayers[1].Turno == 4) {
									var posicao = parseInt(listaPlayers[1].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-blue";
									listaPlayers[1].Posicao = div[i].id;
								}
								if (listaPlayers[2].Turno == 4) {
									var posicao = parseInt(listaPlayers[2].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-green";
									listaPlayers[2].Posicao = div[i].id;
								}
								if (listaPlayers[3].Turno == 4) {
									var posicao = parseInt(listaPlayers[3].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-yellow";
									listaPlayers[3].Posicao = div[i].id;
								}
							}
						} else if (jogadores == 3) {
							if (turno == 1 || turno % 3 == 1) {
								// Verificar o players.turno para saber quem é o 1,2,3,4
								if (listaPlayers[0].Turno == 1) {  
									var posicao = parseInt(listaPlayers[0].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-red";
									listaPlayers[0].Posicao = div[i].id;
								}
								if (listaPlayers[1].Turno == 1) {
									var posicao = parseInt(listaPlayers[1].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-blue";
									listaPlayers[1].Posicao = div[i].id;
								}
								if (listaPlayers[2].Turno == 1) {
									var posicao = parseInt(listaPlayers[2].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-green";
									listaPlayers[2].Posicao = div[i].id;
								}

							} else if (turno == 2 || turno % 3 == 2) {
							 	if (listaPlayers[0].Turno == 2) {
									var posicao = parseInt(listaPlayers[0].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-red";
									listaPlayers[0].Posicao = div[i].id;
								}
								if (listaPlayers[1].Turno == 2) {
									var posicao = parseInt(listaPlayers[1].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-blue";
									listaPlayers[1].Posicao = div[i].id;
								}
								if (listaPlayers[2].Turno == 2) {
									var posicao = parseInt(listaPlayers[2].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-green";
									listaPlayers[2].Posicao = div[i].id;
								}
							} else if (turno == 3 || turno % 3 == 0) {
							 	if (listaPlayers[0].Turno == 3) {
									var posicao = parseInt(listaPlayers[0].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-red";
									listaPlayers[0].Posicao = div[i].id;
								}
								if (listaPlayers[1].Turno == 3) {
									var posicao = parseInt(listaPlayers[1].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-blue";
									listaPlayers[1].Posicao = div[i].id;
								}
								if (listaPlayers[2].Turno == 3) {
									var posicao = parseInt(listaPlayers[2].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-green";
									listaPlayers[2].Posicao = div[i].id;
								}
							}
						} else if (jogadores == 2) {
							if (turno == 1 || turno % 2 == 1) {
								// Verificar o players.turno para saber quem é o 1,2,3,4
								// Passar nova posicao
								if (listaPlayers[0].Turno == 1) {  
									var posicao = parseInt(listaPlayers[0].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-red";
									listaPlayers[0].Posicao = div[i].id;
								}
								if (listaPlayers[1].Turno == 1) {
									var posicao = parseInt(listaPlayers[1].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-blue";
									listaPlayers[1].Posicao = div[i].id;
								}
								
							} else if (turno == 2 || turno % 2 == 0) {
							 	if (listaPlayers[0].Turno == 2) {
									var posicao = parseInt(listaPlayers[0].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);	
									divNova2.className = "player-red";
									listaPlayers[0].Posicao = div[i].id;
								}
								if (listaPlayers[1].Turno == 2) {
									var posicao = parseInt(listaPlayers[1].Posicao);
									var primeiroFilho = div[posicao].firstChild;
				 					primeiroFilho.removeChild(primeiroFilho.childNodes[0]);
									divNova2.className = "player-blue";
									listaPlayers[1].Posicao = div[i].id;
								}
							}
						}

						// console.log("TURNO: ", turno);

						turno++;	

						var turnoOp;

						if (jogadores == 4) {
							turnoOp = turno % 4;
								if (turnoOp == 0)
									turnoOp = 4;
						} else if (jogadores == 3) {
							turnoOp = turno % 3;
								if (turnoOp == 0)
									turnoOp = 3;
						} else if (jogadores == 2) {
							turnoOp = turno % 2;
								if (turnoOp == 0)
									turnoOp = 2;
						}

						for(var k = 0; k < listaPlayers.length; k++) {
							if (listaPlayers[k].Turno == turnoOp) {
								msg.textContent = "Vez do " + listaPlayers[k].Cor;

								if (listaPlayers[k].Cor == "Vermelho")
									msg.style.color = "red";
								else if (listaPlayers[k].Cor == "Amarelo")
									msg.style.color = "#FFA500";
								else if (listaPlayers[k].Cor == "Azul")
									msg.style.color = "blue";
								else if (listaPlayers[k].Cor == "Verde")
									msg.style.color = "green";
							}

						}
						
						subMsg.textContent = "MOVA O TABULEIRO";

					}
				}
					
			}
		} 
		else {}
			// alert("MOVA O TABULEIRO");
		

	});
}

// Mudar Tabuleiro com as Setas
function drawBoard(cartaEntrante, div, posicao) {

	var divNova   = document.querySelectorAll(".quadrados");
	var playerBox = document.querySelectorAll(".player-box");

	var subMsg = document.querySelector("#subMsg");

	if(subMsg.textContent != "MOVA O PERSONAGEM OU PASSE O TURNO") {

		// var subMsg = document.querySelector("#subMsg");
		subMsg.textContent = "MOVA O PERSONAGEM OU PASSE O TURNO";

		var count = 0;
		var f = div;

		for (var i = 0; i < 63; i++){

			if(i == 2 || i == 4 || i == 6) {

				if(posicao == "cima") {

					// console.log("Lista PLAYER: ", listaPlayers);

					while(count < 7) {

						var divPosicao = divNova[f].id;
						if(count == 0) {

							var cartaSobrante = divNova[f].style.backgroundImage;
							var aux = divNova[f-54].firstChild;
							// ARMAZENAR QUAIS PLAYERS ESTAVAM NA PRIMEIRA POSICAO
							var players_primeiro_quad = [];
							var c = 0;
							if ( aux.hasChildNodes() ) {	
								while ( aux.childNodes[c] ) {
									players_primeiro_quad.push(aux.childNodes[c]);
									c++;
								}
							} 

							// console.log("PLAYERS PRIMEIRO QUAD: ", players_primeiro_quad);
							// FOR PARA VERIFICAR POSICAO DE TODOS OS PLAYERS
							for(var k =0; k < listaPlayers.length; k++) {
								// SE EXISTIR PLAYER EM UM QUADRADO QUE MUDARÁ DE POSIÇÃO
								if (divNova[f].childNodes[0].hasChildNodes()) {
									// SE EXISTIR PLAYERS DENTRO DA DIV PLAYERBOX ENTAO
									if ( listaPlayers[k].Posicao == divPosicao ) {
										// PASSAR OS PLAYERS PARA O COMEÇO
										divNova[f-54].firstChild.appendChild(divNova[f].firstChild.firstChild);
										listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) - 54;
									} 
								} 
							}				
						}
						
						else if( count == 1 || count == 2 || count == 3 || count == 4 || count == 5 ) {
							for(var k =0; k < listaPlayers.length; k++) {
								
									// SE EXISTIR PLAYER NO QUADRADO ATUAL
									if ( divNova[f].childNodes[0].hasChildNodes() ) {		
										if (listaPlayers[k].Posicao == divPosicao) {				
											divNova[f+9].childNodes[0].appendChild(divNova[f].childNodes[0].firstChild);
											listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) + 9;
										}
									}

								
							
							}
							divNova[f+9].style.backgroundImage = divNova[f].style.backgroundImage;
						}

						// COUNT == 6
						else if ( count == 6 ) {
							for(var k =0; k < listaPlayers.length; k++) {
								if ( divNova[f].childNodes[0].hasChildNodes() ) {
									while ( c > 0 ) {
										if (listaPlayers[k].Posicao == divPosicao) {
											divNova[f+9].childNodes[0].appendChild(divNova[f].childNodes[0].firstChild);
											listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) + 9;
											c--;
										}	
										k++;
									}
								} 
							}
							divNova[f+9].style.backgroundImage = divNova[f].style.backgroundImage;
							divNova[f].style.backgroundImage = cartaEntrante.style.backgroundImage;
						
						}

					
						f -= 9;
						count++;
					}
				}
				
				else if(posicao == "baixo") {
					while(count < 7) {

						var divPosicao = divNova[f].id;
						if(count == 0) {

							var cartaSobrante = divNova[f].style.backgroundImage;
							var aux = divNova[f+54].firstChild;
							// ARMAZENAR QUAIS PLAYERS ESTAVAM NA PRIMEIRA POSICAO
							var players_primeiro_quad = [];
							var c = 0;
							if ( aux.hasChildNodes() ) {	
								while ( aux.childNodes[c] ) {
									players_primeiro_quad.push(aux.childNodes[c]);
									c++;
								}
							} 

							// console.log("PLAYERS PRIMEIRO QUAD: ", players_primeiro_quad);
							// FOR PARA VERIFICAR POSICAO DE TODOS OS PLAYERS
							for(var k =0; k < listaPlayers.length; k++) {
								// SE EXISTIR PLAYER EM UM QUADRADO QUE MUDARÁ DE POSIÇÃO
								if (divNova[f].childNodes[0].hasChildNodes()) {
									// SE EXISTIR PLAYERS DENTRO DA DIV PLAYERBOX ENTAO
									if ( listaPlayers[k].Posicao == divPosicao ) {
										// PASSAR OS PLAYERS PARA O COMEÇO
										divNova[f+54].firstChild.appendChild(divNova[f].firstChild.firstChild);
										listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) + 54;
									} 
								} 
							}				
						}
						
						else if( count == 1 || count == 2 || count == 3 || count == 4 || count == 5 ) {
							for(var k =0; k < listaPlayers.length; k++) {
								
									// SE EXISTIR PLAYER NO QUADRADO ATUAL
									if ( divNova[f].childNodes[0].hasChildNodes() ) {		
										if (listaPlayers[k].Posicao == divPosicao) {				
											divNova[f-9].childNodes[0].appendChild(divNova[f].childNodes[0].firstChild);
											listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) - 9;
										}
									}

								
							
							}
							divNova[f-9].style.backgroundImage = divNova[f].style.backgroundImage;
						}

						// COUNT == 6
						else if ( count == 6 ) {
							for(var k =0; k < listaPlayers.length; k++) {
								if ( divNova[f].childNodes[0].hasChildNodes() ) {
									while ( c > 0 ) {
										if (listaPlayers[k].Posicao == divPosicao) {
											divNova[f-9].childNodes[0].appendChild(divNova[f].childNodes[0].firstChild);
											listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) - 9;
											c--;
										}	
										k++;
									}
								} 
							}
							divNova[f-9].style.backgroundImage = divNova[f].style.backgroundImage;
							divNova[f].style.backgroundImage = cartaEntrante.style.backgroundImage;
						
						}

					
						f += 9;
						count++;
					}
				}

			}

			if(i == 10 || i == 28 || i == 46) {
			// 10 até 16
				if(posicao == "esquerda") {
					while(count < 7) {

						var divPosicao = divNova[f].id;
						if(count == 0) {

							var cartaSobrante = divNova[f].style.backgroundImage;
							var aux = divNova[f-6].firstChild;
							// ARMAZENAR QUAIS PLAYERS ESTAVAM NA PRIMEIRA POSICAO
							var players_primeiro_quad = [];
							var c = 0;
							if ( aux.hasChildNodes() ) {	
								while ( aux.childNodes[c] ) {
									players_primeiro_quad.push(aux.childNodes[c]);
									c++;
								}
							} 

							// console.log("PLAYERS PRIMEIRO QUAD: ", players_primeiro_quad);
							// FOR PARA VERIFICAR POSICAO DE TODOS OS PLAYERS
							for(var k =0; k < listaPlayers.length; k++) {
								// SE EXISTIR PLAYER EM UM QUADRADO QUE MUDARÁ DE POSIÇÃO
								if (divNova[f].childNodes[0].hasChildNodes()) {
									// SE EXISTIR PLAYERS DENTRO DA DIV PLAYERBOX ENTAO
									if ( listaPlayers[k].Posicao == divPosicao ) {
										// PASSAR OS PLAYERS PARA O COMEÇO
										divNova[f-6].firstChild.appendChild(divNova[f].firstChild.firstChild);
										listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) - 6;
									} 
								} 
							}				
						}
						
						else if( count == 1 || count == 2 || count == 3 || count == 4 || count == 5 ) {
							for(var k =0; k < listaPlayers.length; k++) {
								
									// SE EXISTIR PLAYER NO QUADRADO ATUAL
									if ( divNova[f].childNodes[0].hasChildNodes() ) {		
										if (listaPlayers[k].Posicao == divPosicao) {				
											divNova[f+1].childNodes[0].appendChild(divNova[f].childNodes[0].firstChild);
											listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) + 1;
										}
									}

								
							
							}
							divNova[f+1].style.backgroundImage = divNova[f].style.backgroundImage;
						}

						// COUNT == 6
						else if ( count == 6 ) {
							for(var k =0; k < listaPlayers.length; k++) {
								if ( divNova[f].childNodes[0].hasChildNodes() ) {
									while ( c > 0 ) {
										if (listaPlayers[k].Posicao == divPosicao) {
											divNova[f+1].childNodes[0].appendChild(divNova[f].childNodes[0].firstChild);
											listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) + 1;
											c--;
										}	
										k++;
									}
								} 
							}
							divNova[f+1].style.backgroundImage = divNova[f].style.backgroundImage;
							divNova[f].style.backgroundImage = cartaEntrante.style.backgroundImage;
						
						}

					
						f -= 1;
						count++;
					}
				}

				if(posicao == "direita") {
					while(count < 7) {

						var divPosicao = divNova[f].id;
						if(count == 0) {

							var cartaSobrante = divNova[f].style.backgroundImage;
							var aux = divNova[f+6].firstChild;
							// ARMAZENAR QUAIS PLAYERS ESTAVAM NA PRIMEIRA POSICAO
							var players_primeiro_quad = [];
							var c = 0;
							if ( aux.hasChildNodes() ) {	
								while ( aux.childNodes[c] ) {
									players_primeiro_quad.push(aux.childNodes[c]);
									c++;
								}
							} 

							// console.log("PLAYERS PRIMEIRO QUAD: ", players_primeiro_quad);
							// FOR PARA VERIFICAR POSICAO DE TODOS OS PLAYERS
							for(var k =0; k < listaPlayers.length; k++) {
								// SE EXISTIR PLAYER EM UM QUADRADO QUE MUDARÁ DE POSIÇÃO
								if (divNova[f].childNodes[0].hasChildNodes()) {
									// SE EXISTIR PLAYERS DENTRO DA DIV PLAYERBOX ENTAO
									if ( listaPlayers[k].Posicao == divPosicao ) {
										// PASSAR OS PLAYERS PARA O COMEÇO
										divNova[f+6].firstChild.appendChild(divNova[f].firstChild.firstChild);
										listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) + 6;
									} 
								} 
							}				
						}
						
						else if( count == 1 || count == 2 || count == 3 || count == 4 || count == 5 ) {
							for(var k =0; k < listaPlayers.length; k++) {
								
									// SE EXISTIR PLAYER NO QUADRADO ATUAL
									if ( divNova[f].childNodes[0].hasChildNodes() ) {		
										if (listaPlayers[k].Posicao == divPosicao) {				
											divNova[f-1].childNodes[0].appendChild(divNova[f].childNodes[0].firstChild);
											listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) - 1;
										}
									}

								
							
							}
							divNova[f-1].style.backgroundImage = divNova[f].style.backgroundImage;
						}

						// COUNT == 6
						else if ( count == 6 ) {
							for(var k =0; k < listaPlayers.length; k++) {
								if ( divNova[f].childNodes[0].hasChildNodes() ) {
									while ( c > 0 ) {
										if (listaPlayers[k].Posicao == divPosicao) {
											divNova[f-1].childNodes[0].appendChild(divNova[f].childNodes[0].firstChild);
											listaPlayers[k].Posicao = parseInt(listaPlayers[k].Posicao) - 1;
											c--;
										}	
										k++;
									}
								} 
							}
							divNova[f-1].style.backgroundImage = divNova[f].style.backgroundImage;
							divNova[f].style.backgroundImage = cartaEntrante.style.backgroundImage;
						
						}

					
						f += 1;
						count++;
					}


				}
			}	
		}
	} else
		alert("Mova o Personagem ou Passe o Turno");

	
	return cartaSobrante;
}

// Randomizar Lista
function randOrd() {
	return (Math.round(Math.random())-0.5);
}

// Embaralha a ListaEmbaralhada e Randomiza o tabuleiro ajudando dentro do init()
function randomizarTabuleiro(divNova) {
	var randomPiece  = listaEmbaralhada[Math.floor(Math.random() * listaEmbaralhada.length)];
	var indiceRandom = listaEmbaralhada.indexOf(randomPiece);
	var divNova2 = document.createElement("div");

	listaEmbaralhada.splice(indiceRandom, 1);
	posicoes.splice(0, 1);

		if (randomPiece == 0) { 
			divNova.style.backgroundImage = "url('img/princesa.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			}

		if (randomPiece == 1) { 
			divNova.style.backgroundImage = "url('img/morcego.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			}	

		if (randomPiece == 2) { 
			divNova.style.backgroundImage = "url('img/menino.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			}	

		if (randomPiece == 3) { 
			divNova.style.backgroundImage = "url('img/dragao.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			}

		if (randomPiece == 4) { 
			divNova.style.backgroundImage = "url('img/fantasma.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			}

		if (randomPiece == 5) { 
			divNova.style.backgroundImage = "url('img/fantasma_na_garrafa.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			}		

		if (randomPiece == 6) { 
			divNova.style.backgroundImage = "url('img/coruja.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			}	

		if (randomPiece == 7) { 
			divNova.style.backgroundImage = "url('img/besouro.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			}	

		if (randomPiece == 8) { 
			divNova.style.backgroundImage = "url('img/libelula.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			}	

		if (randomPiece == 9) { 
			divNova.style.backgroundImage = "url('img/rato.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			}	

		if (randomPiece == 10) { 
			divNova.style.backgroundImage = "url('img/lagarto.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			}

		if (randomPiece == 11) { 
			divNova.style.backgroundImage = "url('img/aranha.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			}

		if (randomPiece == 13) {
			var random = Math.floor(Math.random() * 2);
			if (random == 0) {
				divNova.style.backgroundImage = "url('img/caminho_V.png')";
				divNova.appendChild(divNova2);
				divNova2.className = "player-box";
			}
			else {
				divNova.style.backgroundImage = "url('img/caminho_H.png')";
				divNova.appendChild(divNova2);
				divNova2.className = "player-box";
			}
		}

		if (randomPiece == 12) {
			var random = Math.floor(Math.random() * 4);
			if (random == 0) {
				divNova.style.backgroundImage = "url('img/caminho_L1.png')";
				divNova.appendChild(divNova2);
				divNova2.className = "player-box";
			}
			if (random == 1) {
				divNova.style.backgroundImage = "url('img/caminho_L2.png')";
				divNova.appendChild(divNova2);
				divNova2.className = "player-box";
			}
			if (random == 2) {
				divNova.style.backgroundImage = "url('img/caminho_L3.png')";
				divNova.appendChild(divNova2);
				divNova2.className = "player-box";
			}
			if (random == 3) {
				divNova.style.backgroundImage = "url('img/caminho_L4.png')";
				divNova.appendChild(divNova2);
				divNova2.className = "player-box";
			}
		}

		return listaEmbaralhada;
}

// Botao Passar Vez
var passarVez = document.querySelector("#passarVez");
passarVez.addEventListener('click', function() {

	var subMsg = document.querySelector("#subMsg");

	if(subMsg.textContent == "MOVA O TABULEIRO") {
		alert("Mova o Tabuleiro Antes");
	} else {

		// PARA CONTAR OS TURNOS CERTOS
		var turnoOp;

		if (jogadores == 4) {
			turnoOp = turno % 4;
			if (turnoOp == 0)
				turnoOp = 4;
		} else if (jogadores == 3) {
			turnoOp = turno % 3;
			if (turnoOp == 0)
				turnoOp = 3;
		} else if (jogadores == 2) {
			turnoOp = turno % 2;
			if (turnoOp == 0)
				turnoOp = 2;
		}


		// PARA CONTAR QUANTIDADE DE PLAYERS NOS QUADRADOS PARA NAO BUGAR QUANDO UM PLAYER PULAR A VEZ
		// E ACABAR EXCLUINDO O PLAYER ERRADO NO QUADRADO NA FUNÇÃO ANDAR
		for(var k = 0; k < listaPlayers.length; k++) {
			if (listaPlayers[k].Turno == turnoOp) {

				var qtdPlayers = divNova[listaPlayers[k].Posicao].firstChild.childElementCount;
				var filho1 = divNova[listaPlayers[k].Posicao].firstChild.childNodes[0];
				var filho2 = divNova[listaPlayers[k].Posicao].firstChild.childNodes[1];
				var filho3 = divNova[listaPlayers[k].Posicao].firstChild.childNodes[2];
				var filho4 = divNova[listaPlayers[k].Posicao].firstChild.childNodes[3];
				var box        = divNova[listaPlayers[k].Posicao].firstChild;

				if ( qtdPlayers == 1 ) {}

				else if ( qtdPlayers == 2) {
					console.log(filho1);
					box.insertBefore(filho1, box[0]);
				}

				else if ( qtdPlayers == 3) {

					box.insertBefore(filho1, box[0]);
	
				}

				else if ( qtdPlayers == 4) {
					console.log(box);
					box.insertBefore(filho1, box[0]);
				}

			}

		}

		turno++;


		if (jogadores == 4) {
			turnoOp = turno % 4;
			if (turnoOp == 0)
				turnoOp = 4;
		} else if (jogadores == 3) {
			turnoOp = turno % 3;
			if (turnoOp == 0)
				turnoOp = 3;
		} else if (jogadores == 2) {
			turnoOp = turno % 2;
			if (turnoOp == 0)
				turnoOp = 2;
		}
		
		

		for(var k = 0; k < listaPlayers.length; k++) {
			if (listaPlayers[k].Turno == turnoOp) {
				msg.textContent = "Vez do " + listaPlayers[k].Cor;

				if (listaPlayers[k].Cor == "Vermelho")
					msg.style.color = "red";
				else if (listaPlayers[k].Cor == "Amarelo")
					msg.style.color = "#FFA500";
				else if (listaPlayers[k].Cor == "Azul")
										msg.style.color = "blue";
				else if (listaPlayers[k].Cor == "Verde")
					msg.style.color = "green";
			}

		}
							
		subMsg.textContent = "MOVA O TABULEIRO";

		return turno;
	}
});

// Funcao Desenha o Tabuleiro com as peças iniciais
function init(num_jogadores) {
	// console.log("num:", num_jogadores);
	for (var i = 0; i < 9; i++){
		var divNova = document.createElement("div");
		var divNova2 = document.createElement("div");
		div.appendChild(divNova);
		divNova.appendChild(divNova2);

		if (i == 2) {
			divNova.className = "retangulo-h";
			divNova2.className = "triang-b esq-cima";
		} if (i == 4) {
			divNova.className = "retangulo-h";
			divNova2.className = "triang-b cima";
		} if (i == 6) {
			divNova.className = "retangulo-h";
			divNova2.className = "triang-b dir-cima";
		} else
			divNova.className = "retangulo-h";

	}
	for (var i = 0; i < 63; i++){
		var divNova  = document.createElement("div");
		var divNova2 = document.createElement("div");
		var divNova3 = document.createElement("div");
		var divNova4 = document.createElement("div");
		var divNova5 = document.createElement("div");
		var divNova6 = document.createElement("div");

		div.appendChild(divNova);

		divNova.className = "quadrados";

			if(i == 9) {
				divNova.appendChild(divNova2);
				divNova2.className = "triang-d d-cima";
			}

			if(i == 27) {	
				divNova.appendChild(divNova2);
				divNova2.className = "triang-d d-meio";
			}

			if(i == 45) {	
				divNova.appendChild(divNova2);
				divNova2.className = "triang-d d-baixo";
			}

			if(i == 17) {	
				divNova.appendChild(divNova2);
				divNova2.className = "triang-e e-cima";
			}

			if(i == 35) {	
				divNova.appendChild(divNova2);
				divNova2.className = "triang-e e-meio";
			}


			if(i == 53) {	
				divNova.appendChild(divNova2);
				divNova2.className = "triang-e e-baixo";
			}
				

			if (i == 2 || i == 4 || i == 6 || i == 10 || i == 20 || i == 22 || i == 24 || i == 38 || i == 40 || i == 42 || i == 56 || i == 58 || i == 60)
				randomizarTabuleiro(divNova);
			if (i > 10 && i < 17)
				randomizarTabuleiro(divNova);
			if (i > 27 && i < 35)
				randomizarTabuleiro(divNova);
			if (i > 45 && i < 53)
				randomizarTabuleiro(divNova);

		if (i == 1) {
			divNova.style.backgroundImage = "url('img/inicio_vermelho.png')";

			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			divNova2.appendChild(divNova3);
			divNova3.className = "player-red";

		}
		if (i == 3) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/livro.png')";
		}
		if (i == 5) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/gold_bag.png')";
		}
		if (i == 7) {
			divNova.style.backgroundImage = "url('img/inicio_amarelo.png')";

			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			if(num_jogadores == 4) {
				divNova2.appendChild(divNova3);
				divNova3.className = "player-yellow";
			}
		}
		if (i == 19) { 
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/mapa_tesouro.png')";
		}
		if (i == 21) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/coroa.png')";
		}
		if (i == 23) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/chaves.png')";
		}
		if (i == 25) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/caveira.png')";
		}
		if (i == 37) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/anel.png')";
		}
		if (i == 39) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/bau.png')";
		}
		if (i == 41) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/gema.png')";
		}
		if (i == 43) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/espada.png')";
		}
		if (i == 55) {
			divNova.style.backgroundImage = "url('img/inicio_verde.png')";

			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			if(num_jogadores == 3 || num_jogadores == 4) {
				divNova2.appendChild(divNova3);
				divNova3.className = "player-green";
			}



		}
		if (i == 57) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/castical.png')";
		}
		if (i == 59) {
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";
			divNova.style.backgroundImage = "url('img/elmo.png')";
		}
		if (i == 61) {
			divNova.style.backgroundImage = "url('img/inicio_azul.png')";
			divNova.appendChild(divNova2);
			divNova2.className = "player-box";

			divNova2.appendChild(divNova3);
			divNova3.className = "player-blue";
		}

		// NUMERAÇÃO DAS DIV'S
		// divNova.textContent = i;

		divNova.id = i;

	}

	for (var i = 0; i < 9; i++){
		var divNova = document.createElement("div");
		var divNova2 = document.createElement("div");
		div.appendChild(divNova);
		divNova.appendChild(divNova2);

		if (i == 2) {
			divNova.className = "retangulo-h";
			divNova2.className = "triang-c esq-baixo";
		} 

		if (i == 4) {
			divNova.className = "retangulo-h";
			divNova2.className = "triang-c baixo";
		} 

		if (i == 6) {
			divNova.className = "retangulo-h";
			divNova2.className = "triang-c dir-baixo";
		} 
		else
			divNova.className = "retangulo-h";
	}
}

// Função que retorna numero de jogadores
function preStart() {

	var numJogadores = 0;
	while(numJogadores != 2 && numJogadores != 3 && numJogadores != 4) 
		numJogadores = parseInt(prompt("Número de Jogadores (2 até 4): "));

	return numJogadores;
}

// Funcao configura a lista de jogadores, turnos e cores
function setting(num_jogadores) {

	var msg = document.querySelector("#msg");

	for(var i = 0; i < num_jogadores; i++) {
		if(i == 0) {
			var playerVermelho = new Player(1);
			playerVermelho.setColor("Vermelho");		} 
		if(i == 1) {
			var playerAzul = new Player(61);
			playerAzul.setColor("Azul");
		}
		if(i == 2) {
			var playerVerde = new Player(55);
			playerVerde.setColor("Verde");
		}
		if(i == 3) {
			var playerAmarelo = new Player(7);
			playerAmarelo.setColor("Amarelo");
		}
	}

	var random = Math.floor(Math.random() * num_jogadores);


	if (random == 0) {
		playerVermelho.setTurno(1);
		msg.textContent = "Vez do Vermelho";
		msg.style.color = "red";
		if (num_jogadores == 2)
			playerAzul.setTurno(2);
		else if (num_jogadores == 3) {
			playerAzul.setTurno(2);
			playerVerde.setTurno(3);
		}
		else if (num_jogadores == 4) {
			playerAmarelo.setTurno(2);
			playerAzul.setTurno(3);
			playerVerde.setTurno(4);
		}
	}

	if (random == 1) {
		playerAzul.setTurno(1);
		msg.textContent = "Vez do Azul";
		msg.style.color = "blue";
		if (num_jogadores == 2)
			playerVermelho.setTurno(2);
		else if (num_jogadores == 3) {
			playerVerde.setTurno(2);
			playerVermelho.setTurno(3);
		}
		else if (num_jogadores == 4) {
			playerVerde.setTurno(2);
			playerVermelho.setTurno(3);
			playerAmarelo.setTurno(4);
		}
	}
	if (random == 2) {
		playerVerde.setTurno(1);
		msg.textContent = "Vez do Verde";
		msg.style.color = "green";
		if (num_jogadores == 3) {
			playerVermelho.setTurno(2);
			playerAzul.setTurno(3);
		}
		else if (num_jogadores == 4) {
			playerVermelho.setTurno(2);
			playerAmarelo.setTurno(3);
			playerAzul.setTurno(4);
		}
	}
	if (random == 3) {
		playerAmarelo.setTurno(1);
		msg.textContent = "Vez do Amarelo";
		msg.style.color = "#FFA500";
		playerAzul.setTurno(2);
		playerVerde.setTurno(3);
		playerVermelho.setTurno(4);
	}

		var listaPlayers = [
			{"Posicao": playerVermelho.posicao, "Turno": playerVermelho.turno, "Cor": playerVermelho.cor},
			{"Posicao": playerAzul.posicao, "Turno": playerAzul.turno, "Cor": playerAzul.cor},
		];

		try {
			listaPlayers[2] = {"Posicao": playerVerde.posicao, "Turno": playerVerde.turno, "Cor": playerVerde.cor};
		} catch(e) {}
		try {
			listaPlayers[3] = {"Posicao": playerAmarelo.posicao, "Turno": playerAmarelo.turno, "Cor": playerAmarelo.cor};
		} catch(e) {}

		try {
		console.log("PlayerVERMELHO_TURNO", playerVermelho.turno);
		}catch(e) {}try {
		console.log("PlayerAmarelo_TURNO", playerAmarelo.turno);
		}catch(e) {}try {
		console.log("PlayerAzul_TURNO", playerAzul.turno);
		}catch(e) {}try {
		console.log("PlayerVerde_TURNO", playerVerde.turno);
		} catch(e) {}
		// console.log("RANDOM", random);

		return listaPlayers;
}


// REQUISITOS DO JOGO

// Nome, Numero de Jogadores, Com cartas ou não (Primeiro com cartas por fora)
// Escolher Cores
// Randomizar Tabuleiro
// Pegar 3 cartas cada jogador
// Randomizar quem será o Primeiro a Jogar
// Jogador move o tabuleiro, depois decide se anda com o Boneco ou fica parado
// Pode mover para a mesma posição do adversário
// Caso consiga pegar algum de seus objetivos mostre sua carta aos outros adversario e pegue outra carta até conseguir seus 3 objetivos
// Depois volte para sua posição original do tabuleiro
// Seu personagem seja movido para fora do tabuleiro, o personagem aparece na pela do labirinto que acabaram de colocar "teletransportando" para o outro lado do tabuleiro
// Fazer as setas e o funcionamento delas assim como seus efeitos visuais alem de poder girar a peça quando for encaixar

// Fazer botoes para "reiniciar partida" ou "sair para criar um novo jogo"

