const campos = document.querySelectorAll('.campo-amarelo'); // Efeito amarelado quando campo esta preenchido 
const formulario = document.getElementById('dados-login');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const spanErroLogin = document.getElementById('erro-login');
const spanErroSenha = document.getElementById('erro-senha');
    
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
    
    login.addEventListener('input', function(eventoCapturado) {
    spanErroLogin.textContent = "";
    });

    senha.addEventListener('input', function(eventoCapturado) {
    spanErroSenha.textContent = "";
    });

    formulario.addEventListener('submit', function(eventoCapturado) {
    eventoCapturado.preventDefault(); 

    spanErroLogin.textContent = "";
    spanErroSenha.textContent = "";
       
        if(login.value.trim()==""){
        spanErroLogin.textContent = "Este campo é obrigatório."; 
            
        return;
        }

        if(senha.value.trim()==""){
        spanErroSenha.textContent = "Este campo é obrigatório."; 
            
        return;
        }   
                
        console.log("Login válido!");
        return;
    });   