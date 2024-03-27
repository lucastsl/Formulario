const btnValidacao = document.querySelector(".submit");
const inputValidacao = document.querySelectorAll(".input");

btnValidacao.addEventListener("click", ()=> {   
    
    inputValidacao.forEach( (input) => {
        const taPreenchido = input.value;

        if (taPreenchido) {

            input.nextElementSibling.classList.remove("mostrar");
            input.classList.remove("nao-preenchido");
            input.classList.add("preenchido");

        } else {

            input.classList.remove("preenchido");
            input.classList.add("nao-preenchido");
            input.nextElementSibling.classList.add("mostrar");

        }
    })
})
