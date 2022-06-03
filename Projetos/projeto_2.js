const prompt = require("prompt-sync")();
while(true){
console.clear();

console.log(`Seja bem vindo ao jogo Jokenpô!`);
console.log();
console.log(`Instruções: `);
console.log(`Pedra ganha da tesoura, mas perde para o papel.`);
console.log(`Tesoura ganha do papel, mas perde para a pedra.`);
console.log(`Papel ganha da pedra, mas perde para a tesoura.`);
console.log();

let jogador;
let pc;
let p1 = 0;
let p2 = 0;


let r = +prompt(`digite a quantidade de rodadas: `);

for (let i = 0; i != r; i++) {
  console.log();
  console.log(`1 - Tesoura`);
  console.log(`2 - Papel`);
  console.log(`3 - Pedra`);
  console.log();
  let p = +prompt(`Escolha a sua opção: `);
  console.log();
    if (p == 1 ) {
      (jogador =1),(p=`Tesoura`);
    } else if (p == 2) {
      (jogador =2),(p=`Papel`);
    } else if (p == 3) {
      (jogador =3),(p=`Pedra`);
    }
    while (i != r) {
      let resp = Math.floor(Math.random()*3+1);
      if (resp == 1) {
        (pc = 1), (resp = `Tesoura`);
      } else if (resp == 2) {
        (pc = 2), (resp = `Papel`);
      } else if (resp == 3) {
        (pc = 3), (resp = `Pedra`);
      }
      console.log(`Jogador: ${p} x PC: ${resp}`)

      if (jogador == 3 && pc == 1) {
        p1++
      } else if (jogador == 1 && pc == 3) {
        p2++
      } else if (jogador < pc) {
        p1++
      } else if (pc < jogador) {
        p2++
      } else if (pc == jogador){}
      console.log(`Pontos do jogador = ${p1}`);
      console.log(`Pontos do PC = ${p2}`);
      console.log()
      break
      }
}
if (p1 > p2) {
  console.log(`Jogador obteve ${p1} pontos e foi o campeão`);
} else if (p2 > p1) {
  console.log(`PC obteve ${p2} pontos e foi o campeão`);
} else {
  console.log(`O jogo terminou empatado`);
}

console.log()
let novojogo = prompt(`Jogo finalizado. Deseja jogar novamente? `);
if (novojogo == `sim`) {
  continue;
} else {
  console.log(`Muito obrigado por ter jogado, até a próxima`);
  break
}
}