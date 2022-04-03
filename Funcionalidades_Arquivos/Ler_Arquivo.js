const fs = require("fs");


function Ler_Arquivo() {

    const pasta = process.env.LOCAL_PASTA;
    const arquivo = pasta + "arquivo.txt"
    
    try{
        if (fs.existsSync(arquivo)) {
            fs.readFile(arquivo, "utf-8", function(err, data) {
                var linhas = data.split(/\r?\n/);
                linhas.forEach(function(linha){
                    console.log(linha)
                })
            })
        }else {
            console.log("Arquivo não existe.")
        }
    }catch(err){
        console.log("Ocorreu um erro: ", err)
    }finally{
        console.log("Processo finalizado.")
    }
}

module.exports = Ler_Arquivo;