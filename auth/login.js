const form = document.getElementById("formLogin");
const btn = document.getElementById("btnSubmitLogin");

const campos = {
    user: document.getElementById("user"),
    senha: document.getElementById("senha")
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (!usuarioSalvo) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    if (
        campos.user.value === usuarioSalvo.user &&
        campos.senha.value === usuarioSalvo.senha
    ) {
        alert("Login realizado com sucesso!");
        // window.location.href = "dashboard.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
});
