window.onload = function(){
    var confirmar = window.confirm("Hola, queres iniciar?");
    if (confirmar) {
        do {
            var cantIntegrantes = window.prompt("cantidad de integrantes de la familia");
            console.log(cantIntegrantes);  
            if (isNaN(cantIntegrantes)) {
                alert("el dato debe ser un numero");
            }          
        } while ( isNaN(cantIntegrantes) || cantIntegrantes < 3);

    }else{
        location.href = "https://www.netflix.com/ar/";
    }
}