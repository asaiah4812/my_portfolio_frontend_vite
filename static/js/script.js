import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});


let theme =  localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}
function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = '../static/css/default.css'
    }
    if(mode == 'blue'){
        document.getElementById("theme-style").href = "../static/css/blue.css";
    }
    if(mode == 'green'){
        document.getElementById("theme-style").href = "../static/css/green.css";
    }
    if(mode == 'purple'){
        document.getElementById("theme-style").href = "../static/css/purple.css";
    }
    localStorage.setItem('theme', mode)
}