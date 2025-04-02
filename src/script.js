setTimeout (function() {
  let idade = prompt("Quantos anos você tem?");
  if (idade < 18) {
    alert("Você ainda não pode participar do Clube de Duelos de Hogwarts!");
  } else {
    alert("Bem-vindo ao Clube de Duelos de Hogwarts!");
  
    let feiticoJogador = prompt("Escolha seu feitiço: 1-Expelliarmus, 2-Stupefy, 3-Protego");
    let feiticoComputador = Math.floor(Math.random() * 3) + 1;
  
    if (feiticoJogador == feiticoComputador) {
      alert("Empate! Ambos lançaram o mesmo feitiço!");
    } else if (
      (feiticoJogador == 1 && feiticoComputador == 2) || // Expelliarmus vence Stupefy
      (feiticoJogador == 2 && feiticoComputador == 3) || // Stupefy vence Protego
      (feiticoJogador == 3 && feiticoComputador == 1)    // Protego vence Expelliarmus
    ) {
      alert("Você venceu o duelo!");
    } else {
      alert("O computador venceu o duelo!");
    }
  
    let feitiços = ["Expelliarmus", "Stupefy", "Protego"];
    alert("O computador escolheu: " + feitiços[feiticoComputador - 1]);
  }
},1000)