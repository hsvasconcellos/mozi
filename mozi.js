var botao = document.querySelector(".conteudo");
var caixa = document.querySelector(".box");

function esconderBotao() {
  botao.classList.toggle("hide");
}

function adicionarImg() {
  caixa.style.backgroundImage = "url('ananda.jpg')";
}

botao.addEventListener("click", () => {
  esconderBotao();

  adicionarImg();
});
