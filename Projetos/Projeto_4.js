const prompt = require('prompt-sync')();
while (true) {
console.clear();

let diego = {
    teordesono: 20,
    teordeagua: 20,
    teordecomida: 20,
    vida: 20,

    mudavida: function (vida) {
        this.vida += vida;
        console.log(`Vida: ${this.vida}`);
    },

    mudasono: function (teordesono) {
        this.teordesono += teordesono;
        console.log(`Sono: ${this.teordesono}`);
    },

    mudaagua: function (teordeagua) {
        this.teordeagua += teordeagua;
        console.log(`Teor de água: ${this.teordeagua}`);
    },

    mudacomida: function (teordecomida) {
        this.teordecomida += teordecomida;
        console.log(`Teor de comida: ${this.teordecomida}`);
    },
};
let contadorDias = 0;

(sono = `regulado`),
(agua = `saciado`),
(comida = `saciado`),
console.log(`Essa aventura será baseada em 1 major que está indo para uma guerra`);
console.log();
console.log(`Segue as credenciais desse major.`);
console.log();
const major = {
    nome: '${jogador}',
    idade: 25,
    cidade: 'Araraquara',
};
console.log(major);
console.log();
console.log(`Status do Diego:`);
console.log(`
    Sono: ${sono}
    Agua: ${agua}
    Comida:${comida}
    `);
prompt(`Digite enter para continuar `);
console.clear();
console.log(`A jornada desse guerreiro começa amanhã e logo a noite se aproxima e ele tem que descansar, lembre-se ele deve ter uma otima noite de sono.`);
console.clear();
contadorDias++;
let missao = false;
while (!missao) {
    console.log(`${contadorDias}º dia de guerra!`);
    console.log();
    let horasdormida = prompt(`Diego conseguiu dormir bem? `);
    console.log();
    if (horasdormida == `sim` || horasdormida == `s`) {
        console.log(`Que bom! Ele está totalmente descansado!`);
        diego.mudasono(0);
    } else if (horasdormida == `nao` || horasdormida == `n`) {
        console.log(`Ele não teve uma otima noite de sono! E tende a ter um dia mais exausto.`);
        diego.mudasono(-10);
    }
    console.log();
    console.log(`Diego acordou com cede e com fome, lembre-se que um bom guerreiro deve-se está de barriga cheia e hidratado`);
    console.log();
    let desejacomer = prompt(`Deseja alimentar o major Diego? `);
    console.log();
    if (desejacomer == `sim` || desejacomer == `s`) {
        console.log(`Após uma ótima alimentação, vamos hidratar? `);
        diego.mudacomida(0);
    } else if (desejacomer == `nao` || desejacomer == `n`) {
        console.log(`Tudo bem, porém Diego tende a sentir fome quando não come. Agora vamos hidratar? `);
        diego.mudacomida(-10);
    }
    console.log();
    let desejaagua = prompt(`Deseja hidratar o major Diego? `);
    console.log();
    if (desejaagua == `sim` || desejaagua == `s`) {
        console.log(`Major hidratado`);
        diego.mudaagua(0);
    } else if (desejaagua == `nao` || desejaagua == `n`) {
        console.log(`Tudo bem, porém Diego tende a sentir sede quando não bebe água.`);
        diego.mudaagua(-10);
    }
    console.log();
    contadorDias++;
    console.log(`${contadorDias}º dia de guerra!`);
    console.log();
    console.log(`Após um dia cansativo nosso major chega na base, porém antes de seguir para o local de combate nosso combatente precisa-se descansar, comer e hidrata-se pois enfrentou uma longa viagem.`);
    console.log();
    (sono = `com sono`),
    (agua = `com sede`),
    (comida = `com fome`),
    console.log(`Status do Diego:`);
    console.log(`
    Sono: ${sono}
    Agua: ${agua}
    Comida:${comida}
    `);
    console.log();
    let horasdormida1 = prompt(`Diego deve-se descansar? `);
    console.log();
    if (horasdormida1 == `sim` || horasdormida1 == `s`) {
        console.log(`Durma bem Diego! Amanhã o dia será longo e boa sorte major! `);
        if (horasdormida == `sim` || horasdormida == `s`) {
            diego.mudasono(0);
        } else if (horasdormida == `nao` || horasdormida == `n`) {
            diego.mudasono(10);
        }
    } else if (horasdormida1 == `nao` || horasdormida1 == `n`) {
        console.log(`Tudo bem, porém Diego tende a sentir fome quando não come. Agora vamos hidratar? `);
        diego.mudasono(-10);
    }
    console.log();
    let desejacomer1 = prompt(`Deseja alimentar o major Diego? `);
    console.log();
    if (desejacomer1 == `sim` || desejacomer1 == `s`) {
        console.log(`Após uma ótima alimentação, vamos hidratar?`);
        if (desejacomer == `sim` || desejacomer == `s`) {
            diego.mudacomida(0);
        } else if (desejacomer == `nao` || desejacomer == `n`) {
            diego.mudacomida(10);
        }
    } else if (desejacomer1 == `nao` || desejacomer1 == `n`) {
        console.log(`Tudo bem, porém Diego tende a sentir sede quando não bebe água.`);
        diego.mudacomida(-10);
    }
    console.log();
    let desejaagua1 = prompt(`Deseja hidratar o major Diego? `);
    console.log();
    if (desejaagua1 == `sim` || desejaagua1 == `s`) {
        console.log(`Major hidratado`);
        if (desejaagua == `sim` || desejaagua == `s`) {
            diego.mudaagua(0);
        } else if (desejaagua == `nao` || desejaagua == `n`) {
            diego.mudaagua(10);
        }
    } else if (desejaagua1 == `nao` || desejaagua1 == `n`) {
        console.log(`Tudo bem, porém Diego tende a sentir sede quando não bebe água.`);
        diego.mudaagua(-10);
    }
    console.log();
    if (diego.teordesono == 0 || diego.teordeagua == 0 || diego.teordecomida == 0) {
        console.log(`Infelizmente Diego não pode ir para o local da guerra, pois um grande major precisa está sem sono ou hidratado ou alimentado.`);
        console.log();
        console.log(`Então nosso major vai estar dando suporte na base`);
        console.log();
        console.log(`Nossos guerreiros vão está partido amanhã.`);
        prompt(`Digite enter para continuar `);
        console.clear();
        contadorDias++;
        base = 0;
        let vitoria = false;
        while (!vitoria) {
            console.log(`${contadorDias}º dia de guerra!`);
            console.log();
            console.log(`Você acorda e precisa realizar a atividade da base!`);
            console.log();
            console.log(`Nossos guerreiros precisam sair o mais rapido possivél! Vá ligando os nossos veiculos para ir adiantando! `);
            console.log();
            let p1 = prompt('Ligou os tanques de guerra? ');
            let p2 = prompt('Ligou os blindados? ');
            let p3 = prompt('Ligou os helicóptero? ');
            let p4 = prompt('Ligou os caças? ');
            let p5 = prompt('Ligous os drones? ');

            if (p1 == 'sim' || p1 == 's') {
                p1 = 1;
                base++;
            } else {
                p1 = 0;
            }
            if (p2 == 'sim' || p2 == 's') {
                p2 = 1;
                base++;
            } else {
                p2 = 0;
            }
            if (p3 == 'sim' || p3 == 's') {
                p3 = 1;
                base++;
            } else {
                p3 = 0;
            }
            if (p4 == 'sim' || p4 == 's') {
                p4 = 1;
                base++;
            } else {
                p4 = 0;
            }
            if (p5 == 'sim' || p5 == 's') {
                p5 = 1;
                base++;
            } else {
                p5 = 0;
            }

            if (base == 5) {
                console.log();
                console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.');
                vitoria = true;
                missao = true;
            } else if (base == 4) {
                console.log();
                console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.');
                vitoria = true;
                missao = true;
            } else if (base == 3) {
                console.log();
                console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.');
                console.log(`Precisamos de no minino 4 veiculos já ligado, tente novamente.`);
                prompt(`Digite enter para continuar `);
                console.clear();
                base = 0;
            } else if (base == 1 || base == 2) {
                console.log();
                console.log('Você falha, mas ainda consegue fugir da situação');
                console.log(`Precisamos de no minino 4 veiculos já ligado, tente novamente.`);
                prompt(`Digite enter para continuar `);
                console.clear();
                base = 0;
            } else if (base == 0) {
                console.log();
                console.log('Você falha miseravelmente.');
                console.log(`Precisamos de no minino 4 veiculos já ligado, tente novamente.`);
                prompt(`Digite enter para continuar `);
                console.clear();
                base = 0;
            }
        }
    } else if (diego.teordesono == 10 || diego.teordeagua == 10 || diego.teordecomida == 10) {
        console.log(`O major Diego não está 100% para ir para guerra, pois algum teor ficou com apenas 10 pontos, porém ele disposto a ir, entretando por não está 100% ele vai está no morro com uma sniper dando suporte a tropa. Boa sorte major! `);
        console.log();
        console.log(`Nossos guerreiros vão está saindo amanhã.`);
        seguir = true;
        prompt(`Digite enter para continuar `);
        console.clear();
        contadorDias++;
        console.log(`${contadorDias}º dia de guerra!`);
        console.log();
        console.log(`Nossos guerreiros estão se locomovendo até o local, entretanto temos tropas inimigas durante o caminho acertem eles para naõ temos percas de tropas`);
        console.log();
        console.log(`Para acertar o tiro você precisa adivinhar qual o numero pensado pelo computador.`);
        console.log(`Se não acertar em 5 tentativas você falha a missão e o jogo acaba.`);
        console.log();
        acerto = 0;
        let vitoria1 = false;
        while (!vitoria1) {
            let numeropess = +prompt('Escolha um numero entre 0 e 10: ');

            function getRandomIntInclusive(min, max) {
                // MDN Web Docs
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            let numerocomp = getRandomIntInclusive(0, 10);

            if (numeropess == numerocomp) {
                console.log();
                console.log(`O numero pensado pelo computador foi ${numerocomp}. Você acertou o número!`);
                acerto++;
                vitoria1 = true;
                missao = true;
                console.log();
                console.log(`Você abateu os inimigos e obteve sucesso na missão!`);
            } else
                console.log(`O numero pensado pelo computador foi ${numerocomp}. Você errou o número!`);
            acerto--;
            if (acerto <= -5) {
                console.log();
                console.log(`Você falhou a missão!`);
                vitoria1 = true;
                missao = true;
            }

        }
    } else if (diego.teordesono == 20 || diego.teordeagua == 20 || diego.teordecomida == 20) {
        console.log(`O major Diego está 100% e dara o melhor de si nessa guerra. Boa sorte major!`);
        seguir = true;
    }
    console.log();
    console.log(`Nossos guerreiros vão está saindo amanhã e  você deve-se juntar a eles.`);
    diego.mudavida(0);
    seguir = true;
    prompt(`Digite enter para continuar `);
    console.clear();
    contadorDias++;
    console.log(`${contadorDias}º dia de guerra!`);
    console.log();
    console.log(`Nossos guerreiros estão no meio do confronto`);
    console.log();
    console.log(`Muitas tropas inimigas estão se aproximando então prepare-se para o confronto.`);
    console.log();
    console.log(`Nosso sistema de inteligencia constatou que está se aproximando 4 tropas inimigas, escolha qual arma sua tropa irão enfretar essas 4 tropas de inimigos.`);
    let ArmasArrey = [`AK-47`, `M4A4`, `UMP`];
    let jogador;
    let pc;
    let r = 4;

    for (let i = 0; i < r; i++) {
        console.log();
        console.log(`1 - UMP`);
        console.log(`2 - AK-47`);
        console.log(`3 - M4A4`);
        console.log();
        let p = +prompt(`Escolha a sua opção: `);
        console.log();
        if (p == 1) {
            (jogador = 1), (p = ArmasArrey[2]);
        } else if (p == 2) {
            (jogador = 2), (p = ArmasArrey[0]);
        } else if (p == 3) {
            (jogador = 3), (p = ArmasArrey[1]);
        }
        while (i != r) {
            let resp = Math.floor(Math.random() * 3 + 1);
            if (resp == 1) {
                (pc = 1), (resp = ArmasArrey[2]);
            } else if (resp == 2) {
                (pc = 2), (resp = ArmasArrey[0]);
            } else if (resp == 3) {
                (pc = 3), (resp = ArmasArrey[1]);
            }
            console.log(`Tropa aliada: ${p} x Tropa inimiga: ${resp}`);

            if (jogador == 3 && pc == 1) {
                console.log(`Nossas tropas venceu essa tropa inimiga`);
                diego.mudavida(0);
            } else if (jogador == 1 && pc == 3) {
                console.log(`Tropas inimigas abatem alguns de nossos soldados e você leva um tiro de raspão. Cuidado!`);
                diego.mudavida(-5);
            } else if (jogador < pc) {
                console.log(`Nossas tropas venceu essa tropa inimiga`);
                diego.mudavida(0);
            } else if (pc < jogador) {
                console.log(`Tropas inimigas abatem alguns de nossos soldados e você leva um tiro de raspão. Cuidado!`);
                diego.mudavida(-5);
            } else if (pc == jogador) {
                console.log(`Ambas as tropas recuam e evitam um confronto`);
            }
            console.log();
    }
    if (diego.vida == 0) {
        console.log(`Você falhou a missão!`);
        vitoria2 = true;
        seguir = true;
        missao = true;
    } else if (diego.vida >= 5 && diego.vida <=10){
        console.log(`Não esperamos passar por esse sufoco, como estamos com soldados feridos vamos recuar.`);
        vitoria2 = true;
        seguir = true;
        missao = true;
    }else 
        console.log(`Conseguimos abater os inimigos e obtivemos sucesso na missão!`);
        vitoria2 = true;
        seguir = true;
        missao = true;
    }
}
console.log();
let novojogo = prompt(`Aventura finalizada. Deseja jogar novamente? `);
if (novojogo == `sim` || novojogo == `s`) {
    final = true;
    continue;
} else {
    console.log(`Muito obrigado por ter embarcado nessa aventura, até a próxima!`);
    final = true;
    break;
}
}
