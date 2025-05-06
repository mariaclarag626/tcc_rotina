document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    // Simulando validação (substituir depois por chamada ao PHP/backend)
    if (email === "admin@admin.com" && senha === "123") {
      document.getElementById("mensagem").style.color = "green";
      document.getElementById("mensagem").textContent = "Login realizado com sucesso!";
    } else {
      document.getElementById("mensagem").style.color = "red";
      document.getElementById("mensagem").textContent = "Email ou senha incorretos.";
    }
  });
  