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
        var texto = acordeon.querySelector(".Info") 

        let isOpen = acordeon.classList.contains('open')
        if (isOpen){

            acordeon.classList.remove('open')
            texto.textContent = "Mais informações"


        }else{

           acordeon.classList.add('open')    
           texto.textContent = "Menos informações" 
        
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
