document.addEventListener("DOMContentLoaded", () => {
  const inputSenha = document.getElementById("senha"); // input
  const botaoOlho = document.getElementById("alternarSenha"); // button
  const textoAlterar = document.getElementById("senhaErrorText"); // label

  const msgErroLabel = document.getElementById("emailTexto"); // label
  const inputEmail = document.getElementById("email"); // input

  const inputCheckbox = document.getElementById("lembrarCheck"); // label
  const imgMostrar = document.getElementById("imgCheck"); // img

  const spanMostrar = document.getElementById("spanInserirEmail"); // span do email
  const spanMostrar2 = document.getElementById("spanInserirSenha"); // span da senha

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
      spanMostrar2.style.display = "block";
    } 
    
    else {
      inputSenha.style.border = "";
      textoAlterar.style.color = "black";
      spanMostrar2.style.display = "none";
    }
  });

  inputEmail.addEventListener("input", () => {
    if (inputEmail.value === "") {
      inputEmail.style.border = "2px solid red";
      inputEmail.style.borderRadius = "10px";
      msgErroLabel.style.color = "red";
      spanMostrar.style.display = "block";
    } 
    
    else {
      inputEmail.style.border = "black";
      msgErroLabel.style.color = "black";
      spanMostrar.style.display = "none";
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
