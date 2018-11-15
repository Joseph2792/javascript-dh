


window.onload = function(){
    
    do {
        var cantTarea = window.prompt("Ingresar la cantidad de tareas que desea agregar");
        console.log(cantTarea);  
        if (isNaN(cantTarea) || cantTarea < 3) {
            alert("el dato debe ser un numero o mayor a 3");
        }         
    } while ( isNaN(cantTarea) || cantTarea < 3);
    var contTareas = [];
    //var confirmar = window.confirm("estas seguro que deseas agregar " + cantTarea); 
    for (var i = 0; i < cantTarea; i++) {
        
        do{
            var tarea = window.prompt("Ingresar descripcion de la tarea");  
            if (tarea == "") {
                alert("la tarea no debe estar vacia");
            }else{
                contTareas.push(tarea);
            }
        }while( tarea == "")
    }   
    console.log(contTareas);
    var ul = document.createElement('ul');
    var elBody = document.querySelector('body');
    
    for (var n = 0; n < contTareas.length; n++) {
        var li = document.createElement('li');
        li.innerText = contTareas[n];
        ul.append(li);
    }
    
    elBody.append(ul);
    
}
