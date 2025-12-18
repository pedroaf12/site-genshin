const form = document.getElementById("formLogin");
const btn = document.getElementById("btnSubmitLogin");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede recarregar a página

  console.log(btn.value); // "Confirmar"

  const usuario = document.getElementById("username").value;
  const senha = document.getElementById("senha").value;

  console.log(usuario, senha);
});