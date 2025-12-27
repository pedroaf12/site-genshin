const form = document.getElementById("formLogin");

const campos = {
    user: document.getElementById("user"),
    email: document.getElementById("mail"),
    celular: document.getElementById("celular"),
    senha: document.getElementById("senha"),
    confirmarSenha: document.getElementById("confirmarSenha")
};

/* Máscara de celular */
campos.celular.addEventListener("input", () => {
    let valor = campos.celular.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    campos.celular.value = valor;
});

/* Submit único */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (campos.senha.value !== campos.confirmarSenha.value) {
        alert("As senhas não conferem!");
        campos.confirmarSenha.focus();
        return;
    }

    const usuario = {
        user: campos.user.value,
        email: campos.email.value,
        celular: campos.celular.value,
        senha: campos.senha.value
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
});
