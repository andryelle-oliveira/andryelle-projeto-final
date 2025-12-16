document.addEventListener("DOMContentLoaded", () => {
  console.log("Mundo Animal carregado 🐾");
});

function voltarPagina() {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
}