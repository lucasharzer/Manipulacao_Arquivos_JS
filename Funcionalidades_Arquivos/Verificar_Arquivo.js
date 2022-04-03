const fs = require("fs");


function Verificar_Arquivo() {

    const pasta = process.env.LOCAL_PASTA;
    const arquivo = pasta + "arquivo.txt"
    
    if (!fs.existsSync(arquivo)){
        console.log("Esse arquivo não existe.")
    }else {
        console.log("Esse arquivo já existe.")
    }
}

module.exports = Verificar_Arquivo;