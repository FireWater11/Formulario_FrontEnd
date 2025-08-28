document.addEventListener("DOMContentLoaded", () => {
  const inputSenha = document.getElementById("senha");
  const botaoOlho = document.getElementById("alternarSenha");
  const textoAlterar = document.getElementById("senhaErrorText");

  const msgErroEmail = document.getElementById("mensagem-erro");
  const msgErroLabel = document.getElementById("emailTexto");
  const inputEmail = document.getElementById("email");

  const inputCheckbox = document.getElementById("lembrarCheck");
  const imgMostrar = document.getElementById("imgCheck");

  botaoOlho.addEventListener("click", () => {
    if (inputSenha.type === "password") {
      inputSenha.type = "text";
    } else {
      inputSenha.type = "password";
    }
  });

  inputSenha.addEventListener("input", () => {
    if (inputSenha.value.trim() === "") {
      inputSenha.style.border = "2px solid red";
      inputSenha.style.borderRadius = "10px";
      inputSenha.style.width = "";
      textoAlterar.style.color = "red";

    } else {
      inputSenha.style.border = "";
    }
  });

  inputEmail.addEventListener("input", () => {
    if (inputEmail.value.trim() === "") {
      inputEmail.style.border = "2px solid red";
      inputEmail.style.borderRadius = "10px";
      inputEmail.style.width = "";
      msgErroLabel.style.color = "red";
    } else {
        inputEmail.style.border = "black";
        msgErroLabel.style.color = "black";
    }
  })

  

});
