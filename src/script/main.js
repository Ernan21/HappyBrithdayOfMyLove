const inicio_relacionamento = new Date("2019-08-05");

function formatDate(date) {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getTempoRelacionamento() {
  let agora = new Date();

  let anos = agora.getFullYear() - inicio_relacionamento.getFullYear();
  let meses = agora.getMonth() - inicio_relacionamento.getMonth();
  let dias = agora.getDate() - inicio_relacionamento.getDate();

  if (dias < 0) {
    meses--;
    let ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += ultimoMes.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  let diffMs = agora - inicio_relacionamento;
  let diffSegundos = Math.floor(diffMs / 1000);
  let horas = Math.floor((diffSegundos % (60 * 60 * 24)) / 3600);
  let minutos = Math.floor((diffSegundos % 3600) / 60);
  let segundos = diffSegundos % 60;

  let anos_text = anos === 1 ? `${anos} ano` : `${anos} anos`;
  let meses_text = meses === 1 ? `${meses} mês` : `${meses} meses`;
  let dias_text = dias === 1 ? `${dias} dia` : `${dias} dias`;

  return `${anos_text}, ${meses_text}, ${dias_text}, ${horas}h ${minutos}m ${segundos}s juntos 💕`;
}

function atualizarTela() {
  document.getElementById("dataInicio").innerText = formatDate(
    inicio_relacionamento
  );
  document.getElementById("tempo").innerText = getTempoRelacionamento();
}

setInterval(atualizarTela, 1000);
atualizarTela();

// Corações caindo
function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(criarCoracao, 500);
/*
<div class="container">
    <h2>2025</h2>
</div>
<div class="container">
    <h2>2024</h2>
</div>
<div class="container">
    <h2>2023</h2>
</div>
<div class="container">
    <h2>2022</h2>
</div>
<div class="container">
    <h2>2021</h2>
</div>
<div class="container">
    <h2>2020</h2>
</div>*/
