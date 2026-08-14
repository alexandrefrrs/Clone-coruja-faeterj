const campo = document.querySelectorAll('.campo-amarelo'); // Efeito amarelado quando campo esta preenchido 
const campos = document.querySelectorAll('.campo-amarelo'); // Efeito amarelado quando campo esta preenchido 
const formulario = document.getElementById('dados-login');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
    
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
    
    formulario.addEventListener('submit', function(eventoCapturado) {
    eventoCapturado.preventDefault(); 
      
        if(login.value.trim()==""){
        console.log("O nome é obrigatório"); 
            
        return;
        }

        if(senha.value.trim()==""){
        console.log("A senha é obrigatório"); 
            
        return;
        }   
                
        console.log("Login válido!");
        return;
    });