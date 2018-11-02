//Abre o forumulário de nomes quando o jogador clica em jogar
document.getElementById("jogar").addEventListener("click", function(){joga2()});

function joga2(){
	// Primeiro faz o botão de jogar desaparecer
	document.getElementById("dv1").style.display="none";

	// São preparadas as variáveis que armazenam as informações dos elementos do formulario

	var dv = document.createElement("div");
	dv.setAttribute('id', "dv2");

	var f = document.createElement("form"); // Formulário
	f.setAttribute('method',"post");
	f.setAttribute('action',"submit.php");
	f.setAttribute('class', "d-flex flex-column justify-content-center form");

	var l1 = document.createElement("label"); // Primeiro label
	l1.setAttribute('for', "name_1");
	l1.textContent += "Nome 1";

	var i1 = document.createElement("input"); // Primeiro input com o nome do primeiro jogador
	i1.setAttribute('placeholder', "Nome Jogador 1")
	i1.setAttribute('type',"text");
	i1.setAttribute('id',"name_1");
	i1.setAttribute('class', "textInput");

	var l2 = document.createElement("label"); // Segundo label
	l2.setAttribute('for', "name_2");
	l2.textContent += "Nome 2";
	
	var i2 = document.createElement("input"); // Segundo label com o nome do segundo jogador
	i2.setAttribute('placeholder', "Nome Jogador 2")
	i2.setAttribute('type',"text");
	i2.setAttribute('id',"name_2");
	i2.setAttribute('class', "textInput");

	var s = document.createElement("button"); // Botão de submit
	s.setAttribute('type',"button");
	s.setAttribute('class', "Button");
	s.setAttribute('id',"play");
	s.textContent += "Começar partida";

	var m = document.createElement("button"); // botão de voltar ao menu
	m.setAttribute('type',"button");
	m.setAttribute('class', "Button");
	m.setAttribute('id',"menu");
	m.textContent += "Voltar";

	
	// Todas as variáveis de conteúdo do formulário são colocadas dentro do formulário

	f.appendChild(l1);
	// f.appendChild(document.createElement("br"));
	f.appendChild(i1);
	// f.appendChild(document.createElement("br"));
	f.appendChild(l2);
	// f.appendChild(document.createElement("br"));
	f.appendChild(i2);
	f.appendChild(document.createElement("br"));
	f.appendChild(s);
	f.appendChild(document.createElement("br"));
	f.appendChild(m);
	dv.appendChild(f);

	// O formulário é colocado na div de opcoes
	document.getElementsByClassName("opcoesdiv")[0].appendChild(dv);
	document.getElementById("play").addEventListener("click", function(){salva()});
	document.getElementById("menu").addEventListener("click", function(){volta()});
    
}


//Salva os nomes digitados no formulário e vai para a página de jogo
function salva(){
    sessionStorage.setItem("jogador_1",document.getElementById("name_1").value);
    sessionStorage.setItem("jogador_2",document.getElementById("name_2").value);
    window.location = "jogo.html";
}

function volta(){
	document.getElementById("dv1").style.display="block";
	document.getElementById("dv2").style.display="none";
}