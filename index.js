let caixaDeSuprimentos = [];

let higiene = "";
let alimentacao = "";
let farmacia = "";
let lazer = "";
// 
higiene = ["creme", "amaceante", "sabonete", "sabao em pó", "pasta de dente"];
alimentacao = ["arroz", "feijao", "tempeiro", "sal", "carne"];
farmacia = ["dipirona", "desodorante", "acetona","perfume", "papel"];
lazer = ["escorregador", "pula_pula", "balanco", "carrocel", "roda gigandte"];
//console.log(higiene);
caixaDeSuprimentos.push(higiene, alimentacao, farmacia, lazer);
let contador = 0;

for (let i = 0; i < caixaDeSuprimentos.length; i++) {
  for (let j = 0; j < caixaDeSuprimentos[i].length; j++) {
    if (caixaDeSuprimentos[i][j]) {
    contador++;
    
      console.table(contador.length);

    }
   
  }
}if(contador === 20){
        console.log("esta certo")
    }else if(contador > 20){
        console.log("temos algum intruso")
    }else(console.log("ainda esta faltando"))
//console.table(caixaDeSuprimentos[i][j])

console.log(caixaDeSuprimentos)