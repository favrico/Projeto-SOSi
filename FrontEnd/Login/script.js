document.getElementById("btnLogin").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
        alert("Preencha email e senha!");
        return;
    }

    const body = {
        email: email,
        senha: senha
    };

    try {
        const response = await fetch("http://", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login efetuado com sucesso!");
        } else {
            alert("Erro no login: " + (data.message || "Verifique seus dados."));
        }

    } catch (erro) {
        alert("Nao foi possivel conectar ao servidor.");
        console.error(erro);
    }
});
