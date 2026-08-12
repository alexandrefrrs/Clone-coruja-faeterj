const campos = document.querySelectorAll('.campo-amarelo'); // Efeito amarelado quando campo esta preenchido 
const formulario = document.getElementById('dados-login');

let login = document.getElementById("login");
let senha = document.getElementById("Senha");

    if(login.value.trim()==""){
    console.log("O nome é obrigatório"); 
            
    return false;
    }

    if(senha.value.trim()==""){
    console.log("A senha é obrigatório"); 
            
    return false;
    }   
                
    console.log("Login válido!");
    return true;
                            

    campos.forEach(campo => {
                       
    campo.addEventListener('blur', function() {

    if (this.value.trim() !== "") {
    this.classList.add('preenchido'); // Se tiver texto, adiciona a classe
    } 
        else {
        this.classList.remove('preenchido'); // Se estiver vazio, remove
        }
        
    });
    });
       