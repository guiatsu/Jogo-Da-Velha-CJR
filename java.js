let turno = 0;  // flag para saber se estah inserindo uma bola ou um x
let mat = [[0,0,0],[0,0,0],[0,0,0]]; // matriz que guarda a posicao dos x e bola
let win = 0; // flag que diz se alguem venceu ou nao

    /* verificacoes se algum dos elementos da matriz foram clicados e chamada da funcao para preencher o espaco da matriz  */

    document.getElementById("a1").addEventListener("click", function(){gerencia("a1",0,0)}); 
    document.getElementById("a2").addEventListener("click", function(){gerencia("a2",0,1)});
    document.getElementById("a3").addEventListener("click", function(){gerencia("a3",0,2)});
    document.getElementById("b1").addEventListener("click", function(){gerencia("b1",1,0)});
    document.getElementById("b2").addEventListener("click", function(){gerencia("b2",1,1)});
    document.getElementById("b3").addEventListener("click", function(){gerencia("b3",1,2)});
    document.getElementById("c1").addEventListener("click", function(){gerencia("c1",2,0)});
    document.getElementById("c2").addEventListener("click", function(){gerencia("c2",2,1)});
    document.getElementById("c3").addEventListener("click", function(){gerencia("c3",2,2)});
function gerencia(element, i, j){
    if(turno == 0){
        bola(element,i,j);
        turno = 1;
    }
    else{
        x(element,i,j);
        turno = 0;
    }
}
function bola(element,i,j){

    mat[i][j] = 1;  // colocando o valor de bola na matriz
    let flag_linha = true;  // flag que ficara falsa caso algo diferente de bola seja encontada na linha
    let flag_coluna = true; // flag que ficara falsa caso algo diferente de bola seja encontada na coluna
    let flag_diag_prin = true; // flag que ficara falsa caso algo diferente de bola seja encontada na diagonal principal
    let flag_diag_sec = true; // flag que ficara falsa caso algo diferente de bola seja encontada na diagonal secundaria
    let flag_empate = true;
    
    for(i = 0 ; i < 3 && flag_linha == true && flag_coluna == true; i++){
        for(j=0;j<3;j++){
            if(mat[i][j] != 1){
                flag_linha = false; // se algo diferente de bola foi encontrado na linha i flag_linha = false
            }
            if(mat[j][i] != 1){
                flag_coluna = false; // se algo diferente de bola foi encontrado na coluna j flag_coluna = false
            }
            if(i == j){
                if(mat[i][j] != 1){
                    flag_diag_prin = false; // se algo diferente de bola foi encontrado na diagonal principal flag_diag_princ = false
                }
            }
            if(j == ((3 - 1) - i)){
                if(mat[i][j] != 1){
                    flag_diag_sec = false; // se algo diferente de bola foi encontrado na diagonal secundaria flag_diag_sec = false
                }
            }
            if(mat[i][j] == 0){
                flag_empate = false;
            }
        }
        if(flag_linha == true || flag_coluna == true){ // caso alguma linha ou coluna esteja completa alertar o jogador sobre a vitoria
            alert("o jogador 1 ganhou");
            flag_linha = false;
            flag_coluna = false;
            flag_diag_prin = false;
            flag_diag_sec = false;
            win = 1;
        }
        else{       // senao reinicia as flags e testa de novo
            if(i != 2){ 
                flag_linha = true;
                flag_coluna = true;
                
            }
        }
    }
    if((flag_diag_prin == true || flag_diag_sec == true)){  // se alguma diagonal estiver completa alerte o jogador sobre a vitoria
        alert("o jogador 1 ganhou");
        win = 1;
    }
    if(flag_empate == true){
        alert("deu velha");
    }
    document.getElementById(element).style.backgroundImage = "url(o.png)"; // alterar a imagem de cada bloco da matriz
}
function x(element,i,j){
    turno = 0;
    mat[i][j] = 2;  // colocando o valor de bola na matriz
    let flag_linha = true;  // flag que ficara falsa caso algo diferente de bola seja encontada na linha
    let flag_coluna = true; // flag que ficara falsa caso algo diferente de bola seja encontada na coluna
    let flag_diag_prin = true; // flag que ficara falsa caso algo diferente de bola seja encontada na diagonal principal
    let flag_diag_sec = true; // flag que ficara falsa caso algo diferente de bola seja encontada na diagonal secundaria

    for(i = 0 ; i < 3 && flag_linha == true && flag_coluna == true; i++){
        for(j=0;j<3;j++){
            if(mat[i][j] != 2){
                flag_linha = false; // se algo diferente de bola foi encontrado na linha i flag_linha = false
            }
            if(mat[j][i] != 2){
                flag_coluna = false; // se algo diferente de bola foi encontrado na coluna j flag_coluna = false
            }
            if(i == j){
                if(mat[i][j] != 2){
                    flag_diag_prin = false; // se algo diferente de bola foi encontrado na diagonal principal flag_diag_princ = false
                }
            }
            if(j == ((3 - 1) - i)){
                if(mat[i][j] != 2){
                    flag_diag_sec = false; // se algo diferente de bola foi encontrado na diagonal secundaria flag_diag_sec = false
                }
            }
            if(mat[i][j] == 0){
                flag_empate = false;
            }
        }
        if(flag_linha == true || flag_coluna == true){ // caso alguma linha ou coluna esteja completa alertar o jogador sobre a vitoria
            alert("o jogador 2 ganhou");
            flag_linha = false;
            flag_coluna = false;
            flag_diag_prin = false;
            flag_diag_sec = false;
            win = 1;
        }
        else{       // senao reinicia as flags e testa de novo
            if(i != 2){ 
                flag_linha = true;
                flag_coluna = true;
            }
        }
    }
    if((flag_diag_prin == true || flag_diag_sec == true)){  // se alguma diagonal estiver completa alerte o jogador sobre a vitoria
        alert("o jogador 2 ganhou");
        win = 1;
    }
    if(flag_empate == true){
        alert("deu velha");
    }
    document.getElementById(element).style.backgroundImage = "url(x.png)"; // alterar a imagem de cada bloco da matriz
}