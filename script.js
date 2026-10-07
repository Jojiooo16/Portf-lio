const slider = document.querySelectorAll('.carroseu')
const bntvolta = document.getElementById('volta')
const btnir = document.getElementById('ir')

let currentSlide = 0;

function hideimg() {
    slider.forEach(item => item.classList.remove('on'))
}
function showImg() {
    slider[currentSlide].classList.add('on')
}

function next() {
    hideimg()
    if(currentSlide === slider.length - 1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    showImg()
}
function back() {
    hideimg()
    if(currentSlide === 0){
        currentSlide = slider.length - 1
    } else {
        currentSlide--
    }
    showImg()
}

bntvolta.addEventListener('click', back)
btnir.addEventListener('click', next)

function mascara_telefone() {
    var campo = document.getElementById("telefone");

    
    var numeros = campo.value.replace(/\D/g, "").slice(0, 11);

   
    var formatado = numeros;

    if (numeros.length > 10) {
       
        formatado = numeros.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (numeros.length > 6) {
        
        formatado = numeros.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (numeros.length > 2) {
        formatado = numeros.replace(/^(\d{2})(\d{0,5}).*/, "($1) $2");
    } else if (numeros.length > 0) {
        formatado = numeros.replace(/^(\d{0,2}).*/, "($1");
    }

    campo.value = formatado;
}
function validar_email() {
    var campo = document.getElementById("email");
    var erro = document.getElementById("erro_email");
    var email = campo.value.trim();

    
    if (email === "") {
        erro.textContent = "";
        return false;
    }

    if (!email.includes("@")) {
        erro.textContent = "O e-mail precisa ter @";
        return false;
    }


    var dominio = email.split("@")[1];

    if (!dominio || !dominio.includes(".")) {
        erro.textContent = "O e-mail precisa ter um domínio válido (ex: .com)";
        return false;
    }

    
    var formato = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!formato.test(email)) {
        erro.textContent = "E-mail inválido";
        return false;
    }

    erro.textContent = "";
    return true;
}

const botaoTema = document.getElementById("meu-switch");
const htmlElement = document.documentElement;
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "dark_mode") {
    htmlElement.classList.add("dark_mode");
}
botaoTema.addEventListener("click", () => {
    htmlElement.classList.toggle("dark_mode");
    
    // Salva a escolha no localStorage
    if (htmlElement.classList.contains("dark_mode")) {
        localStorage.setItem("tema", "dark_mode");
    } else {
        localStorage.setItem("tema", "light");
    }
});

