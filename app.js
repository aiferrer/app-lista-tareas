const color = require("colors");
const { exit } = require("process");
const {mostrarMenu, pausa} = require('./helpers/mensajes');

console.clear();

const main = async () => {
    console.log("Hola Mundo");  

    let opt = '';

    do {
        opt = await mostrarMenu();
        if (isNaN(opt) ) {
            console.log('Debe presionar una numero del 1 a al 5');       
            
        }else{
            console.log({opt});
        }
  
        await pausa();

    } while (opt !== '0' );
};

main();


