//MENU LATERAL
var menu_visible= false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//Si esta oculto
        menu.style.display= "block";
        menu_visible= true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono la opcion
let links= document.querySelectorAll("nav a");
for(var x= 0; x<links.length;x++){
    menu.style.display= "none";
    menu_visible= false
}