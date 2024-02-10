let pagina_actual = "pagina-sobre-nosotros"

var timer = null;
function handleScroll(){
	if (!document.body.classList.contains("on-scrollbar")) {
        document.body.classList.add("on-scrollbar");
    }
    
	if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
    	if (document.body.classList.contains("on-scrollbar")) {
        	document.body.classList.remove("on-scrollbar");
    	}
    }, 500);
}


function smoothScroll(section){
	document.getElementById(section).scrollIntoView(); 
}

function cambiar_pagina(pagina_nueva){
    let nueva = document.getElementById(pagina_nueva);
    let vieja = document.getElementById(pagina_actual);
    if(nueva.classList.contains("hidden")){
        vieja.classList.add("hidden");
        nueva.classList.remove("hidden");
        pagina_actual = pagina_nueva;
    }
}


