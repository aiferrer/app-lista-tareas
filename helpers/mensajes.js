const color = require("colors");

function mostrarMenu() {

    console.log('=========================='.green);
    console.log('  Seleccione una Opción   ');
    console.log('=========================='.green);

    console.log(`${'?'.green} Que desea hacer?`);
    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas Completadas`);
    console.log(`${'4.'.green} Listar Tareas Pendientes`);
    console.log(`${'5.'.green} Completar Tarea(s)`);
    console.log(`${'6.'.green} Borrar Tarea`);
    console.log(`${'0.'.green} Salir`);
}

module.exports = {
    mostrarMenu
}