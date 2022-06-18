const prompt = require('prompt-sync')();
// while (true) {
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
(sono = `regulado`),
    (agua = `saciado`),
    (comida = `saciado`),
    console.log(
        `Essa aventura será baseada em 1 major que está indo para uma guerra`,
    );
console.log();
console.log(`Segue as credenciais desse major.`);
console.log();
const major = {
    nome: 'Diego',
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
console.log(
    `A jornada desse guerreiro começa amanhã e logo a noite se aproxima e ele tem que descansar, lembre-se ele deve ter uma otima noite de sono.`,
);
console.clear();
console.log(`O sol já está batendo na janela e o major Diego devem acordar.`);
console.log();
let horasdormida = prompt(`Diego conseguiu dormir bem? `);
console.log();
if (horasdormida == `sim` || horasdormida == `s`) {
    console.log(`Que bom! Ele está totalmente descansado!`);
    diego.mudasono(0);
} else if (horasdormida == `nao` || horasdormida == `n`) {
    console.log(
        `Ele não teve uma otima noite de sono! E tende a ter um dia mais exausto.`,
    );
    diego.mudasono(-10);
}
console.log();
console.log(
    `Diego acordou com cede e com fome, lembre-se que um bom guerreiro deve-se está de barriga cheia e hidratado`,
);
console.log();
let desejacomer = prompt(`Deseja alimentar o major Diego? `);
console.log();
if (desejacomer == `sim` || desejacomer == `s`) {
    console.log(`Após uma ótima alimentação, vamos hidratar? `);
    diego.mudacomida(0);
} else if (desejacomer == `nao` || desejacomer == `n`) {
    console.log(
        `Tudo bem, porém Diego tende a sentir fome quando não come. Agora vamos hidratar? `,
    );
    diego.mudacomida(-10);
}
console.log();
let desejaagua = prompt(`Deseja hidratar o major Diego? `);
console.log();
if (desejaagua == `sim` || desejaagua == `s`) {
    console.log(`Major hidratado`);
    diego.mudaagua(0);
} else if (desejaagua == `nao` || desejaagua == `n`) {
    console.log(
        `Tudo bem, porém Diego tende a sentir sede quando não bebe água.`,
    );
    diego.mudaagua(-10);
}
console.log();
console.log(`Após uma longa viagem de 18h nosso major chega na base em Kiev , porém antes de seguir para o local de combate nosso 
    combatente precisa-se descansar, comer e hidrata-se pois enfrentou uma longa viagem.`);
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
    console.log(
        `Tudo bem, porém Diego tende a sentir fome quando não come. Agora vamos hidratar? `,
    );
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
    console.log(
        `Tudo bem, porém Diego tende a sentir sede quando não bebe água.`,
    );
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
    console.log(
        `Tudo bem, porém Diego tende a sentir sede quando não bebe água.`,
    );
    diego.mudaagua(-10);
}
console.log();
if (diego.teordesono == 0 || diego.teordeagua == 0 || diego.teordecomida == 0) {
    console.log(
        `Infelizmente Diego não pode ir para o local da guerra, pois um grande major precisa está sem sono ou hidratado ou alimentado.`,
    );
    console.log();
    console.log(
        `Como nosso major não estava 100%, ele vai estar dando suporte na base`,
    );
    prompt(`Digite enter para continuar `);
    console.clear();
    base = 0;
    let vitoria = false;
    while (!vitoria) {
        console.log();
        console.log(`Nossos guerreiros precisam sair o mais rapido possivél! Vá ligando os nossos veiculos para ir adiantando! `)
        console.log();
        let p1 = prompt('Ligou os tanques de guerra? ');
        let p2 = prompt('Ligou os blindados? ');
        let p3 = prompt('Ligou os helicóptero? ');
        let p4 = prompt('Ligou os caças? ');
        let p5 = prompt('Ligous os drones? ');

        if (p1 == 'sim' || p1 == 's') {
            p1 = 1;
            base++
        } else {
            p1 = 0;
        }
        if (p2 == 'sim' || p2 == 's') {
            p2 = 1;
            base++
        } else {
            p2 = 0;
        }
        if (p3 == 'sim'  || p3 == 's') {
            p3 = 1;
            base++
        } else {
            p3 = 0;
        }
        if (p4 == 'sim'  || p4 == 's') {
            p4 = 1;
            base++
        } else {
            p4 = 0;
        }
        if (p5 == 'sim'  || p5 == 's') {
            p5 = 1;
            base++
        } else {
            p5 = 0;
        }

        if (base == 5){
            console.log();
            console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.');
            vitoria = true;
        }else if (base == 4){
            console.log();
            console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.');
            vitoria = true;
        }else if (base == 3){
            console.log();
            console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.');
            console.log(`Precisamos de no minino 4 veiculos já ligado, tente novamente.`);
            base = 0;
        }else if (base == 1 || base == 2){
            console.log();
            console.log('Você falha, mas ainda consegue fugir da situação');
            console.log(`Precisamos de no minino 4 veiculos já ligado, tente novamente.`);
            base = 0;
        }else if(base == 0){
            console.log(); 
            console.log('Você falha miseravelmente.');
            console.log(`Precisamos de no minino 4 veiculos já ligado, tente novamente.`);
            base = 0;
        }  
    }
} else if (
    diego.teordesono == 10 ||
    diego.teordeagua == 10 ||
    diego.teordecomida == 10
) {
    console.log(
        `O major Diego não está 100% para ir para guerra, pois algum teor ficou com apenas 10 pontos, porém ele disposto a ir, entretando por não está 100% ele chegara ao local com -5 de vida. Boa sorte major! `,
    );
    seguir = true;
    diego.mudavida(-5);
} else if (
    diego.teordesono == 20 ||
    diego.teordeagua == 20 ||
    diego.teordecomida == 20
) {
    console.log(
        `O major Diego está 100% e dara o melhor de si nessa guerra. Boa sorte major!`,
    );
    seguir = true;
    diego.mudavida(0);
}

// console.log();
// let novojogo = prompt(`Aventura finalizada. Deseja jogar novamente? `);
// if (novojogo == `sim` || novojogo == `s`) {
//     continue;
// } else {
//     console.log(`Muito obrigado por ter embarcado nessa aventura, até a próxima!`);
//     break;
// }
// }
