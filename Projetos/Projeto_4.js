const prompt = require('prompt-sync')();
// while (true) {
    console.clear();

    let diego = {
    teordesono: 20,
    teordeagua: 20,
    teordecomida: 20,
    teordesono: 20,
    vida: 20,

    mudavida: function(vida){
        this.vida += vida;
        console.log(`Sono: ${this.vida}`);
    },
    
    mudasono: function(teordesono){
        this.teordesono += teordesono;
        console.log(`Sono: ${this.teordesono}`);
    },

    mudaagua: function(teordeagua){
        this.teordeagua += teordeagua;
        console.log(`Teor de água: ${this.teordeagua}`);
    },

    mudacomida: function(teordecomida){
        this.teordecomida += teordecomida;
        console.log(`Teor de comida: ${this.teordecomida}`);
    },

    }
    sono = `regulado`,
    agua = `saciado`,
    comida = `saciado`,

    console.log(`Essa aventura será baseada em 1 major que está indo para uma guerra`);
    console.log();
    console.log(`Segue as credenciais desse major.`)
    console.log();
    const major = {
        nome: 'Diego',
        idade: 25,
        cidade: 'Araraquara',
    };
    console.log(major);
    console.log();
    console.log(`Status do Diego:`)
    console.log(`
    Sono: ${sono}
    Agua: ${agua}
    Comida:${comida}
    `)
    prompt(`Digite enter para continuar `);
    console.clear();
    console.log(`A jornada desse guerreiro começa amanhã e logo a noite se aproxima e ele tem que descansar, lembre-se ele deve ter uma otima noite de sono.`);
    console.clear();
    console.log(`O sol já está batendo na janela e o major Diego devem acordar.`);
    console.log();
    let horasdormida = prompt(`Diego conseguiu dormir bem? `)
    console.log();
    if(horasdormida == `sim` || horasdormida == `s`){
        console.log(`Que bom! Ele está totalmente descansado!`);
        diego.mudasono(0);
    }else if(horasdormida == `nao` || horasdormida == `n`){
        console.log(`Ele não teve uma otima noite de sono! E tende a ter um dia mais exausto.`);
        diego.mudasono(-10);
    }
    console.log();
    console.log(`Diego acordou com cede e com fome, lembre-se que um bom guerreiro deve-se está de barriga cheia e hidratado`);
    console.log();
    let desejacomer = prompt(`Deseja alimentar o major Diego? `)
    if (desejacomer == `sim` || desejacomer == `s`){
        console.log(`Após uma ótima alimentação, vamos hidratar? `)
        diego.mudacomida(0);
    }else if(desejacomer == `nao` || desejacomer == `n`){
        console.log(`Tudo bem, porém Diego tende a sentir fome quando não come. Agora vamos hidratar? `)
        diego.mudacomida(-10);
    }  
    console.log();
    let desejaagua = prompt(`Deseja hidratar o major Diego? `)
    if (desejaagua == `sim` || desejaagua == `s`){
        console.log(`Major hidratado`)
        diego.mudaagua(0);
    }else if(desejaagua == `nao` || desejaagua == `n`){
        console.log(`Tudo bem, porém Diego tende a sentir sede quando não bebe água.`)
        diego.mudaagua(-10);
    }
    console.log();
    console.log(`Após uma longa viagem de 18h nosso major chega na base em Kiev , porém antes de seguir para o local de combate nosso 
    combatente precisa-se descansar, comer e hidrata-se pois enfrentou uma longa viagem.`);
    console.log();
    let horasdormida1 = prompt(`Diego deve-se descansar? `)
    if (horasdormida1 == `sim` || horasdormida1 == `s`){
        console.log(`Durma bem Diego! Amanhã o dia será longo e boa sorte major! `)
        if(horasdormida == `sim` || horasdormida == `s`){
        diego.mudasono(0);
        }else if(horasdormida == `não` || horasdormida == `n`){
            diego.mudasono(+10);
        }
    }else if(horasdormida1 == `nao` || horasdormida1 == `n`){
        console.log(`Tudo bem, porém Diego tende a sentir fome quando não come. Agora vamos hidratar? `)
        diego.mudasono(-10);
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