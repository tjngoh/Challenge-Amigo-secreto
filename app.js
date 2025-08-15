let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome no array
    listaAmigos.push(nome);

    // Atualiza a lista exibida na tela
    atualizarLista();

    // Limpa o campo de texto
    input.value = "";
}

// Função para atualizar a lista no HTML
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de recriar

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
