document.getElementById("play").addEventListener("click", function(){salva()});


function salva(){
    sessionStorage.setItem("jogador_1",document.getElementById("name_1").value);
    sessionStorage.setItem("jogador_2",document.getElementById("name_2").value);
    window.location = "jogo.html";
}