function validarDatos(){
let nombre= document.getElementById('nombre').value;
let apellido= document.getElementById('apellido').value;
let correo= document.getElementById('correo').value;
let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let telefono= document.getElementById('telefono').value;
let regex2 = /^([0-9]{9})+$/;
let terminos= document.getElementById('terminos').checked;



let mensaje= document.getElementById('mensaje'); 
//mensaje.innerText = "";
if(nombre == ''){
   
  mensaje.innerText = "campo nombre es obligatorio" 


} 
else{

    if(apellido == ''){
   
          mensaje.innerText = "campo apellido es obligatorio"  
  

        }
     else{
        if(!(regex.test(correo))){

            mensaje.innerText = "el correo no es válido";
       }

       else{
           if(!(regex2.test(telefono))){

                  mensaje.innerText = "el telefono no es válido";
           }


     else{
         if(!terminos){

                mensaje.innerText = "Debe aceptar terminos y condiciones";

                      } 
                      
                      else{window.location="proyectofinal2.html";}



       }
       }
       }
       }
       }

