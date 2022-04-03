const fs = require("fs");


function Renomear_Arquivo() {

    const pasta = process.env.LOCAL_PASTA;
    const arquivo = pasta + "arquivo.txt"
    const novo_arquivo = pasta + "novo_arquivo.txt"
    
    try{
        if (fs.existsSync(arquivo)) {
            fs.rename(arquivo, novo_arquivo, function(err){
                if (err) throw (err)

                console.log("Arquivo Renomeado.")
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

module.exports = Renomear_Arquivo;