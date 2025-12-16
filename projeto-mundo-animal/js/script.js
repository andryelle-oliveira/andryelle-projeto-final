window.onload = () => {
  console.log("Mundo Animal carregado 🐾");
};

function voltarPagina() {
  history.back();
}// ===== MENSAGEM AO CARREGAR =====
window.onload = function () {
  console.log("Bem-vindo ao Mundo Animal 🐾");
};

// ===== BOTÃO VOLTAR =====
function voltarPagina() {
  window.history.back();
}

// ===== FORMULÁRIO DE CONTATO =====
function enviarMensagem() {
  alert("Mensagem enviada com sucesso! Obrigado pelo contato 🐾");
}

// ===== LOGIN =====
function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Login realizado com sucesso 🐾");
  window.location.href = "index.html";
}

// ===== LOGIN SOCIAL =====
function loginSocial(rede) {
  alert("Login com " + rede + " em desenvolvimento 🐾");
}