const acoordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acoordeonTriggers.forEach((trigger)=>{
    trigger.addEventListener('click',(e)=>{
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        if (isOpen){
           acordeon.classList.remove('open')
        }else{
           acordeon.classList.add('open')
        }
    })
})


var acoordeonMoreTriggers = document.querySelectorAll('.acordeonMore .triggerMore')


acoordeonMoreTriggers.forEach((trigger)=>{
    trigger.addEventListener('click',(e)=>{
        let acordeon = trigger.parentElement

        let textExists = acordeon.classList.contains(".Info")
        var texto;

        if (textExists){

            texto = acordeon.querySelector(".Info") 

        }else{
            
            texto = acordeon.querySelector(".Img") 

        }

        let isOpen = acordeon.classList.contains('open')
        if (isOpen){

            acordeon.classList.remove('open')

            if(textExists){

                texto.textContent = "Mais informações"

            }else{

                texto.textContent = "Mostrar print"

            }

        }else{

           acordeon.classList.add('open')    
           
           if(textExists){

            texto.textContent = "Menos informações"

            }else{

                texto.textContent = "Ocultar print"

            }
        
        }

    })
})

var TriggerTheme = document.querySelectorAll('.triggerTheme')

TriggerTheme.forEach((trigger)=>{
    trigger.addEventListener('click',(e)=>{

        let body = document.querySelector("body");

        let theme = document.querySelector(".theme");

        let isDark = theme.classList.contains('dark');

        if(isDark){

            theme.classList.remove('dark');
            theme.classList.add('light');

        }else{

            theme.classList.remove('light');
            theme.classList.add('dark');

        }

    })
})

function loadingTheme(){

    let lightMode = window.matchMedia ("(prefers-color-scheme: light)");
    let theme = document.querySelector(".theme");

    if (lightMode.matches) {

        theme.classList.remove('dark');
        theme.classList.add('light');
    
    }

}

// Define uma função que é chamada quando a imagem é clicada
function openModal(id) {
    // Obtém o elemento da janela modal pelo seu id
    var modal = document.getElementById(id);
    // Muda o estilo da janela modal para display: block, tornando-a visível
    modal.style.display = "block";
  }
  
  // Define uma função que é chamada quando o botão de fechar é clicado
  function closeModal(id) {
    // Obtém o elemento da janela modal pelo seu id
    var modal = document.getElementById(id);
    // Muda o estilo da janela modal para display: none, tornando-a invisível
    modal.style.display = "none";
  }
  