const prompt = require('prompt-sync')();
while (true) {
console.clear();

const jogodavelha = Array(9).fill();

let ganhou = false;
let vencedor;

let jogada = `x`;

while (!ganhou) {
    console.log(`Vez do jogador ${jogada}`);

    const localdesejado = +prompt(
        `Digite onde deseja marcar a sua jogada (0 e 8): `,
    );

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
        console.log()
    } else {
        jogada = `x`;
        console.log()
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

console.log(jogodavelha);

if (ganhou) {
    console.log(`Jogador que escolheu a opção ${vencedor} venceu a partida.`);
} else {
    console.log(`Partida terminou empatada.`);
}

console.log();
let novojogo = prompt(
    `Jogo finalizado. Deseja jogar novamente? `,
)
if (novojogo == `sim` || novojogo == `s`) {
    continue;
} else {
    console.log(`Muito obrigado por ter jogado, até a próxima!`);
    break;
}
}