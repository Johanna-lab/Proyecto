document.addEventListener('DOMContentLoaded', function(event){
    $("#boton").addEventListener("click", function(){
        let msj = document.getElementById('comentario').value;
        var parrafo = comentar(msj);
        $(".container").appendChild(parrafo);
        document.getElementById("comentario").value ="";
        console.log (parrafo);
        agregarListener();
    });
});
document.addEventListener('DOMContentLoaded', function(event){
    $("#boton2").addEventListener("click", function(){
        let msj = document.getElementById('comentario2').value;
        var parrafo = comentar(msj);
        $(".container2").appendChild(parrafo);
        document.getElementById("comentario2").value = "";
        console.log (parrafo);
        agregarListener();
    });
});
document.addEventListener('DOMContentLoaded', function(event){
    $("#boton3").addEventListener("click", function(){
        let msj = document.getElementById('comentario3').value;
        var parrafo = comentar(msj);
        $(".container3").appendChild(parrafo);
        document.getElementById("comentario3").value = "";
        console.log (parrafo);
        agregarListener();
    });
});

function $(selector){
    return document.querySelector(selector);
}

function comentar(mensaje){
    if(mensaje !=""){
    var parrafo = document.createElement("p");
    parrafo.setAttribute ("class" , "comentario");
    parrafo.innerText = mensaje;
    var close = document.createElement("span");
    close.style.float = "right";
    close.style.color = "red";
    close.style.cursor = "pointer";
    close.innerHTML = "X";
    close.setAttribute ("class", "close");
    parrafo.appendChild(close);
    agregarListener();

    return parrafo;
}
}
function agregarListener(){
     var elements = document.querySelectorAll(".close");
     for (let indice = elements.length - 1; indice >= 0 ;indice -- ){
     var element = elements [indice];
         element.addEventListener("click", function(){
             this.parentNode.style.display = "none";
           console.log("Di click aqui!");
         });
     }
     }


     


    