const fs = require("fs");


function Verificar_Pasta() {

    const pasta = process.env.LOCAL_PASTA;
    
    if (!fs.existsSync(pasta)){
        console.log("Essa pasta não existe.")
    }else {
        console.log("Essa pasta já existe.")
    }
}

module.exports = Verificar_Pasta;