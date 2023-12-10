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

            /* body.style.color = "black";
            body.style.backgroundColor = "white";
            

            let links = document.getElementsByTagName("a");

            for (var i = 0; i < links.length; i++) {
            links[i].style.color = "black";
            }
            
            let acordeon = document.getElementsByClassName(".acordeon");
            for (var i = 0; i < acordeon.length; i++) {
                acordeon[i].style.color = "black";
            }
             */
            theme.classList.remove('dark');
            theme.classList.add('light');

        }else{

            
            /* body.style.backgroundColor = "black";

            var links = document.getElementsByTagName("a");
            body.style.color = "white";
            for (var i = 0; i < links.length; i++) {
            links[i].style.color = "white";
            }

            let acordeon = document.getElementsByClassName(".acordeon h2");
            for (var i = 0; i < acordeon.length; i++) {
                acordeon[i].style.color = "white";
            } */

            theme.classList.remove('light');
            theme.classList.add('dark');

        }



    })
})
