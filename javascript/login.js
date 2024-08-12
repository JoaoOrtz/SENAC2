function validarCredenciales(){

    //datos de entrada
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let numero = document.getElementById("numero").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let contador = 0;
    //Contador de caracteres del numero
    for (let i = 0; i < numero.length; i++){
        if (!isNaN(numero[i])) {
            contador++;
          }
    }

    //validaciones
    if(nombre.trim() == "" || apellido.trim() == "" || numero.trim() == "" || edad.trim() == "" || correo.trim() == ""){
        alert("Verifique su infomación")
    }//Validacion de caracteres dek numero
    else if(contador > 10){
        alert("Verifique su infomación")
    }//Validacion de edad
    else if(edad < 18){
        alert("Eres menor de edad")
    }//Validacion el correo
    else if(!correo.includes("@gmail.com")){
        alert("Verifique su correo")
    }
    else{
        window.location.href = "file:///C:/Users/Joao/Desktop/SENA/1-TRIMESTRE/HTML,CSS,FRAMEWORK/29-07-2024/index.html"  
    }
    
}