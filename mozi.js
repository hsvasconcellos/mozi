var botao = document.querySelector(".conteudo");
var caixa = document.querySelector(".box");
var fundo = document.querySelector(".container");

function esconderBotao() {
  botao.classList.toggle("hide");
}

function adicionarImg() {
  caixa.style.backgroundImage = "url('ananda.jpg')";
}

function adicionarFundo() {
  fundo.style.backgroundImage = "url('coracao.jpg')";
}

botao.addEventListener("click", () => {
  esconderBotao();

  adicionarImg();

  adicionarFundo();
});
