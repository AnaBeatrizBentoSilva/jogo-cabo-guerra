function batalhar(){
    // Preciso criar uma lista com os 3 jogadores
    personagens = ["", "", ""];
    viloes = ["", "", ""];

    forcaPersonagem = 0;
    forcaViloes = 0;

    for(let i = 0; i < 3; i++){
        escolhaPersonagem = prompt("Digite o nome do personagem " + (i + 1));
        personagens[i] = escolhaPersonagem;

        // Calcular a força de cada jogador, e depois somar para saber a força do time
        forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
        // forcaPersonagem += Math.floor(Math.random() * 10) + 1; // Maneira mais avançada de fazer
    }

    for(let i = 0; i < 3; i++){
        indiceAleatorio = Math.floor(Math.random() * 10);
        viloesPossiveis = ["Nazaré Tedesco", "Kléber", "Regina", "Débora", "Suzana", "Paola Bracho", "Carmen", "Nicole", "Soraya Montenegro", "Gastão Diestro"];
        viloes[i] = viloesPossiveis[indiceAleatorio];

        // Calcular a força de cada jogador do time do computador
        forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1;
    }

    // Comparar os dois times para saber quem venceu
    if(forcaPersonagem > forcaViloes){
        alert("Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi de " + forcaPersonagem);
    }else if(forcaPersonagem < forcaViloes){
        alert("Seu time é fraquinho! O computador ganhou o cabo de guerra com força de " + forcaViloes)
    }else{
        alert("Empate! Ambos os times tiveram força de " + forcaPersonagem);
    }
}