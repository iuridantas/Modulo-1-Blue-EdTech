const prompt = require('prompt-sync')();
while (true) {
    console.clear();

    let vitoriax = 0;
    let vitoriao = 0;

    let jogada = `x`;

    let velha = [0,1,2,3,4,5,6,7,8];
    
    let jogo = [[], [], []];
    jogo[2][2] = undefined;
    let layout = '';

    console.log(`SEJA BEM VINDO AO JOGO DA VELHA!`);
    console.log();
    console.log(`Segue o modelo mostrando onde está localizada cada coordenada: `);
    console.log(`
     0 | 1 | 2
    ----------
     3 | 4 | 5
    ---------- 
     6 | 7 | 8`);

    function updateLayout() {
        layout = `${displayItem(jogo[0][0])} | ${displayItem(
            jogo[0][1],
        )} | ${displayItem(jogo[0][2])}
---------
${displayItem(jogo[1][0])} | ${displayItem(
            jogo[1][1],
        )} | ${displayItem(jogo[1][2])}
---------
${displayItem(jogo[2][0])} | ${displayItem(
            jogo[2][1],
        )} | ${displayItem(jogo[2][2])}`;
    }

    function displayItem(item) {
        return item === undefined ? ' ' : item;
    }
    displayItem();
    updateLayout();
    console.log();

    let jogodavelha = Array(9).fill();

    let ganhou = false;
    let vencedor;

    let jogador1 = prompt(`Digite o nome do primeiro jogador: `);
    let jogador2 = prompt(`Digite o nome do segundo jogador: `);
    console.log();
    let rodadas = prompt(`Quantas rodadas deseja jogar: `)
    console.log();
    while(rodadas>0){
    
    console.log(`${jogador1} jogara com a letra: x`)
    console.log(`${jogador2} jogara com a letra: o`)

    if (jogada == `x`) {
        jogada = `x`;
    } else {
        jogada = `o`;
    }

    while (!ganhou) {
        console.log();
        console.log(`Vez do jogador que é representado pela letra: ${jogada}`);
        console.log();
        const localdesejado = +prompt(`Digite onde deseja marcar a sua jogada (0 e 8): `);
        velha[localdesejado] = 10;
        console.log();
        if (localdesejado == '0' && jogo[0][0] == undefined) {
            (jogo[0][0] = jogada), displayItem();
            updateLayout();
            console.log(layout);
        } else if (localdesejado == '1' && jogo[0][1] == undefined) {
            (jogo[0][1] = jogada), displayItem();
            updateLayout();
            console.log(layout);
        } else if (localdesejado == '2' && jogo[0][2] == undefined) {
            (jogo[0][2] = jogada), displayItem();
            updateLayout();
            console.log(layout);
        } else if (localdesejado == '3' && jogo[1][0] == undefined) {
            (jogo[1][0] = jogada), displayItem();
            updateLayout();
            console.log(layout);
        } else if (localdesejado == '4' && jogo[1][1] == undefined) {
            (jogo[1][1] = jogada), displayItem();
            updateLayout();
            console.log(layout);
        } else if (localdesejado == '5' && jogo[1][2] == undefined) {
            (jogo[1][2] = jogada), displayItem();
            updateLayout();
            console.log(layout);
        } else if (localdesejado == '6' && jogo[2][0] == undefined) {
            (jogo[2][0] = jogada), displayItem();
            updateLayout();
            console.log(layout);
        } else if (localdesejado == '7' && jogo[2][1] == undefined) {
            (jogo[2][1] = jogada), displayItem();
            updateLayout();
            console.log(layout);
        } else if (localdesejado == '8' && jogo[2][2] == undefined) {
            (jogo[2][2] = jogada), displayItem();
            updateLayout();
            console.log(layout);
        }

        if (localdesejado < 0 || localdesejado > 8) {
            console.log(`O numero deve ser entre 0 e 8`);
            continue;
        }

        if (jogodavelha[localdesejado]) {
            console.log(`Coordenada já preenchida. Porfavor digite outra!`);
            continue;
        }

        jogodavelha[localdesejado] = jogada;

        if (jogada == `x`) {
            jogada = `o`;
            console.log();
        } else {
            jogada = `x`;
            console.log();
        }

        const disponibilidade = jogodavelha.filter(Boolean).length;

        if (disponibilidade == 0) {
            break;
        }

        const vitoria = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6],
        ];

        if(velha[0] == 10 && velha[1] == 10 && velha[2] == 10 && velha[3] == 10 && velha[4] == 10 && velha[5] == 10 && velha[6] == 10 && velha[7] == 10 && velha[8] == 10){
            console.log(`Partida terminou empatada!`)
            console.log();
            break;
        } 

        for (const condicaovitoria of vitoria) {
            let valoresiguais = 0;
            let valorfinal;

            for (const coordenada of condicaovitoria) {
                const jogada = jogodavelha[coordenada];

                if (jogada && (!valorfinal || jogada == valorfinal)) {
                    valoresiguais++;
                }

                valorfinal = jogada;
            }

            if (valoresiguais == 3) {
                ganhou = true;
                vencedor = valorfinal;
                break;
            }
        }
    }
    if(vencedor == `x`){
        vitoriax++;
    }else if(vencedor == `o`){
        vitoriao++;
    }
    if (ganhou) {
        console.log(`Jogador que escolheu a opção ${vencedor} venceu a partida.`);
        jogo = [[], [], []];
        jogodavelha = Array(9).fill();
        jogada = `x`;
        console.log();
    } 
    ganhou = false
    rodadas--
}   
    if(vitoriax>vitoriao && rodadas<=0){
        console.log(`Parabéns ${jogador1}! Você ganhou o jogo!`)
    }else if(vitoriao>vitoriax && rodadas<=0){
        console.log(`Parabéns ${jogador2}! Você ganhou o jogo!`)
    }else if(vitoriax==vitoriao && rodadas<=0){
        console.log(`Jogo terminou em empate!`)
    }
    console.log();
    let novojogo = prompt(`Jogo finalizado. Deseja jogar novamente? `);
    if (novojogo == `sim` || novojogo == `s`) {
        continue;
    } else if (novojogo == `nao` || novojogo == `n`){
        console.log();
        console.log(`Muito obrigado por ter jogado, até a próxima!`);
        break;
    }
}