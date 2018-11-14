var contTareas = [];


window.onload = function(){
    
    var tareas = pedirTareas();

    var confirmar = window.confirm("estas seguro que deseas agregar " + tareas); 
    if (confirmar) {
        var tarea = validarTarea(tareas);
        contTareas.push(tarea);
    }else{
        tareas = pedirTareas();
    }
}

function pedirTareas(){
    do {
        var cantTarea = window.prompt("Ingresar la cantidad de tareas que desea agregar");
        console.log(cantTarea);  
        if (isNaN(cantTarea) || cantTarea < 3) {
            alert("el dato debe ser un numero o mayor a 3");
        }         
    } while ( isNaN(cantTarea) || cantTarea < 3);
    return cantTarea;
}

function validarTarea (cant){

    for (let i = 0; i < cant; i++) {
        
        do{
            var tarea = window.prompt("Ingresar descripcion de la tarea");  
            if (tarea = "") {
                alert("la tarea no debe estar vacia");
            }
        }while( tarea = "")
    }
    return tarea;
}