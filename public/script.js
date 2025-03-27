// Função para salvar um usuário
function salvarUsuario() {
  const nome = document.getElementById("nome").value;
  fetch("http://localhost:3000/salvar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ao salvar usuário: ${response.status}`);
      }
      return response.json();
    })
    .then(() => {
      listarUsuarios(); // Atualiza a lista de usuários
      document.getElementById("nome").value = ""; // Limpa o campo de nome após salvar
      console.log("Usuário salvo com sucesso!"); // Feedback para o desenvolvedor
      // Opcional: Adicionar feedback visual para o usuário aqui
    })
    .catch((error) => {
      console.error("Erro ao salvar usuário:", error);
      // Opcional: Adicionar feedback visual de erro para o usuário aqui
    });
}

// Função para listar usuários cadastrados
function listarUsuarios() {
  fetch("http://localhost:3000/usuarios")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ao listar usuários: ${response.status}`);
      }
      return response.json();
    })
    .then((usuarios) => {
      const lista = document.getElementById("listaUsuarios");
      lista.innerHTML = ""; // Limpa a lista antes de preencher
      usuarios.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.nome;
        lista.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Erro ao listar usuários:", error);
      // Opcional: Adicionar feedback visual de erro para o usuário aqui
    });
}

// Carregar usuários ao iniciar a página
listarUsuarios();
