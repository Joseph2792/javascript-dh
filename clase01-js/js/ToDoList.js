


window.onload = function(){
    do {      
        do {
            var cantTarea = window.prompt("Ingresar la cantidad de tareas que desea agregar");
            console.log(cantTarea);  
            if (isNaN(cantTarea) || cantTarea < 3) {
                alert("el dato debe ser un numero o mayor a 3");
            }         
        } while ( isNaN(cantTarea) || cantTarea < 3);
        var contTareas = [];
        var confirmar = window.confirm("estas seguro que deseas agregar " + cantTarea); 
        if (confirmar) {                    
            for (var i = 1; i <= cantTarea; i++) {
                
                do{
                    var tarea = window.prompt("Ingresar descripcion de la tarea " + i);  
                    if (tarea == "") {
                        alert("la tarea no debe estar vacia");
                    }else{
                        contTareas.push(tarea);
                    }
                }while( tarea == "")
            }   
            console.log(contTareas);
            var elBody = document.querySelector('body');
            
            var h2 = document.createElement('h2');
            h2.innerText = "To Do List - Cantidad de total " + cantTarea;
            
            var ul = document.createElement('ul');
            
            var p = document.createElement('p');
            p.innerText = "Tareas completadas: " + restoTarea;

            for (var n = 0; n < contTareas.length; n++) {
                var li = document.createElement('li');
                li.innerText = contTareas[n];
                ul.append(li);
            }
            
            elBody.append(h2);
            elBody.append(ul);
            elBody.append(p);
        }
    } while (confirmar === false);  
}
