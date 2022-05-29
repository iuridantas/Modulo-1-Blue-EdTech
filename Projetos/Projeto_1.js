const prompt = require("prompt-sync")();
console.clear()

console.log('Um dos maiores sonhos que o homem já teve foi o de conseguir voar! Conquistar os céus e poder ver o mundo lá do alto, ter uma nova perspectiva do mundo em que vive foi um feito e tanto para toda a humanidade! Então vamos nos preparar para uma jornada de piloto?');
console.log()
console.log("Para começar a sua jornada como piloto deve responder o checklist com sim ou não!");
console.log()
let p1 = prompt ("Desempenho na aeronave está ok? ");
let p2 = prompt ("Aeronave está com os equipamentos? ");
let p3 = prompt ("Conferiu as condições meteorológicas? ");
let p4 = prompt ("Conferiu as condições do aeroporto? ");
let p5 = prompt ("Suas condições físicas está apropriada para voar? ");

if (p1 == "sim"){p1=1}
else {p1=0}
if (p2 == "sim"){p2=1}
else {p2=0}
if (p3 == "sim"){p3=1}
else {p3=0}
if (p4 == "sim"){p4=1}
else {p4=0}
if (p5 == "sim"){p5=1}
else {p5=0}


if (p1+p2+p3+p4+p5==5) console.log("Você está pronto para poder decolar! Boa viagem capitão!.");
else if(p1+p2+p3+p4+p5==4) console.log ("Você está pronto para decolar! Mais na proxima decolagem lembre-se de conferir todo o checklist!");
else if(p1+p2+p3+p4+p5==3) console.log ("Você chegou perto de conseguir a autorização para voar, confira o checklist novamente!");
else if(p1+p2+p3+p4+p5==1 || p1+p2+p3+p4+p5==2) console.log ("Voo não autorizado! checklist não conferido corretamente!");
else console.log ("Voo não autorizado! Você não tem condições de voar!");