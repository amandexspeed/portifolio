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

async function carregaPortifolio(){

    const data = await fetch('https://api.github.com/users/amandexspeed/repos').then(response => response.json());

    const lista = document.querySelector('.portfolio');

    data.forEach(Element => {

        if(Element.name != "amandexspeed"){
            
            var item = document.createElement('li');

            var h1= document.createElement('h1');
            h1.textContent = `${Element.name}: ${Element.description}`;
            h1.setAttribute("class","title github");
            item.appendChild(h1);

            var p = document.createElement('p');
            p.textContent = `Linguagem - ${Element.language}`;
            item.appendChild(p);

            var link = document.createElement('a');
            link.href = Element.html_url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "Link Repo";
            item.appendChild(link);

            if(Element.homepage!=null){

                var link = document.createElement('a');
                link.href = Element.homepage;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = "Link Site";

                item.appendChild(link);

            }
            
            lista.appendChild(item);

        }

    })

}
  