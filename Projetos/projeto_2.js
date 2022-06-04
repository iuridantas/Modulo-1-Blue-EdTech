const prompt = require('prompt-sync')();
while (true) {
    console.clear();

    console.log(`Seja bem vindo ao jogo Jokenpô!`);
    console.log();
    console.log(`Instruções: `);
    console.log(`Pedra ganha da tesoura, mas perde para o papel.`);
    console.log(`Tesoura ganha do papel, mas perde para a pedra.`);
    console.log(`Papel ganha da pedra, mas perde para a tesoura.`);
    console.log();

    let escolhaArrey = [`papel`, `pedra`, `tesoura`];
    let jogador;
    let pc;
    let p1 = 0;
    let p2 = 0;

    let j = prompt(`Qual o seu nome? `);
    console.log();
    let r = +prompt(`digite a quantidade de rodadas: `).trim();

    for (let i = 0; i != r; i++) {
        console.log();
        console.log(`1 - Tesoura`);
        console.log(`2 - Papel`);
        console.log(`3 - Pedra`);
        console.log();
        let p = +prompt(`Escolha a sua opção: `).trim();
        console.log();
        if (p == 1) {
            (jogador = 1), (p = escolhaArrey[2]);
        } else if (p == 2) {
            (jogador = 2), (p = escolhaArrey[0]);
        } else if (p == 3) {
            (jogador = 3), (p = escolhaArrey[1]);
        }
        while (i != r) {
            let resp = Math.floor(Math.random() * 3 + 1);
            if (resp == 1) {
                (pc = 1), (resp = escolhaArrey[2]);
            } else if (resp == 2) {
                (pc = 2), (resp = escolhaArrey[0]);
            } else if (resp == 3) {
                (pc = 3), (resp = escolhaArrey[1]);
            }
            console.log(`${j}: ${p} x PC: ${resp}`);

            if (jogador == 3 && pc == 1) {
                p1++;
            } else if (jogador == 1 && pc == 3) {
                p2++;
            } else if (jogador < pc) {
                p1++;
            } else if (pc < jogador) {
                p2++;
            } else if (pc == jogador) {
            }
            console.log();
            console.log(`Pontos total do ${j} = ${p1}`);
            console.log(`Pontos total do PC = ${p2}`);
            console.log();
            break;
        }
    }
    if (p1 > p2) {
        console.log(`${j} obteve ${p1} pontos e foi o campeão`);
    } else if (p2 > p1) {
        console.log(`PC obteve ${p2} pontos e foi o campeão`);
    } else {
        console.log(`O jogo terminou empatado`);
    }

    console.log();
    let novojogo = prompt(`${j} o jogo foi finalizado. Deseja jogar novamente? `,).toLowerCase();
    if (novojogo == `sim` || novojogo == `s`) {
        continue;
    } else {
        console.log(`Muito obrigado ${j} por ter jogado, até a próxima!`);
        break;
    }
}