const prompt = require('prompt-sync')();
while (true) {
    console.clear();

    let ticTacToe = [[], [], []];
    ticTacToe[2][2] = undefined;
    let ticTacToeLayout = '';

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
        ticTacToeLayout = `${displayItem(ticTacToe[0][0])} | ${displayItem(
            ticTacToe[0][1],
        )} | ${displayItem(ticTacToe[0][2])}
---------
${displayItem(ticTacToe[1][0])} | ${displayItem(
            ticTacToe[1][1],
        )} | ${displayItem(ticTacToe[1][2])}
---------
${displayItem(ticTacToe[2][0])} | ${displayItem(
            ticTacToe[2][1],
        )} | ${displayItem(ticTacToe[2][2])}`;
    }

    function displayItem(item) {
        return item === undefined ? ' ' : item;
    }
    displayItem();
    updateLayout();
    console.log();

    const jogodavelha = Array(9).fill();

    let ganhou = false;
    let vencedor;

    let jogador1 = prompt(`Digite o nome do primeiro jogador: `);
    let jogador2 = prompt(`Digite o nome do segundo jogador: `);
    console.log();
    let escolha1 = prompt(`${jogador1} por favor selecione o simbulo 'x' ou 'o': `);
    let escolha2 = prompt(`${jogador2} por favor selecione o simbulo 'x' ou 'o': `);
    console.log();
    if (escolha1 == 'x' && escolha2 == 'o') {
        console.log('tudo certo, vamo pro jogo');
    } else if (escolha1 == 'o' && escolha2 == 'x') {
        console.log('tudo certo, vamo pro jogo');
    } else {
        console.log();
        console.log('Selecione simbolos diferente');
        console.log();
        escolha1 = prompt(`${jogador1} por favor selecione o simbulo 'x' ou 'o': `);
        escolha2 = prompt(`${jogador2} por favor selecione o simbulo 'x' ou 'o': `);
    }
    console.log();

    if (escolha1 == `x`) {
        jogada = `x`;
    } else {
        jogada = `o`;
    }

    while (!ganhou) {
        console.log(`Vez do jogador ${jogada}`);
        console.log();
        const localdesejado = +prompt(`Digite onde deseja marcar a sua jogada (0 e 8): `);
        console.log();
        if (localdesejado == '0' && ticTacToe[0][0] == undefined) {
            (ticTacToe[0][0] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (localdesejado == '1' && ticTacToe[0][1] == undefined) {
            (ticTacToe[0][1] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (localdesejado == '2' && ticTacToe[0][2] == undefined) {
            (ticTacToe[0][2] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (localdesejado == '3' && ticTacToe[1][0] == undefined) {
            (ticTacToe[1][0] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (localdesejado == '4' && ticTacToe[1][1] == undefined) {
            (ticTacToe[1][1] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (localdesejado == '5' && ticTacToe[1][2] == undefined) {
            (ticTacToe[1][2] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (localdesejado == '6' && ticTacToe[2][0] == undefined) {
            (ticTacToe[2][0] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (localdesejado == '7' && ticTacToe[2][1] == undefined) {
            (ticTacToe[2][1] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (localdesejado == '8' && ticTacToe[2][2] == undefined) {
            (ticTacToe[2][2] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
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

    if (ganhou) {
        console.log(`Jogador que escolheu a opção ${vencedor} venceu a partida.`);
    } else {
        console.log(`Partida terminou empatada.`);
    }

    console.log();
    let novojogo = prompt(`Jogo finalizado. Deseja jogar novamente? `);
    if (novojogo == `sim` || novojogo == `s`) {
        continue;
    } else {
        console.log(`Muito obrigado por ter jogado, até a próxima!`);
        break;
    }
}
