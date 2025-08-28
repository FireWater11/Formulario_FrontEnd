document.addEventListener("DOMContentLoaded", () => {
  const inputSenha = document.getElementById("senha"); // input
  const botaoOlho = document.getElementById("alternarSenha"); // button
  const textoAlterar = document.getElementById("senhaErrorText"); // label

  const msgErroLabel = document.getElementById("emailTexto"); // label
  const inputEmail = document.getElementById("email"); // input

  const inputCheckbox = document.getElementById("lembrarCheck"); // label
  const imgMostrar = document.getElementById("imgCheck"); // img

  botaoOlho.addEventListener("click", () => {

    if (inputSenha.type === "password") {
      inputSenha.type = "text";
    } 
    
    else {
      inputSenha.type = "password";
    }
  });

  inputSenha.addEventListener("input", () => {
    if (inputSenha.value === "") {
      inputSenha.style.border = "2px solid red";
      inputSenha.style.borderRadius = "10px";
      textoAlterar.style.color = "red";
    } 
    
    else {
      inputSenha.style.border = "";
      textoAlterar.style.color = "black";
    }
  });

  inputEmail.addEventListener("input", () => {
    if (inputEmail.value === "") {
      inputEmail.style.border = "2px solid red";
      inputEmail.style.borderRadius = "10px";
      msgErroLabel.style.color = "red";
    } 
    
    else {
      inputEmail.style.border = "";
      msgErroLabel.style.color = "black";
    }
  });

  imgMostrar.style.display = "none";
  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      imgMostrar.style.display = "block";
    } 
    else {
      imgMostrar.style.display = "none";
    }
  });
});
