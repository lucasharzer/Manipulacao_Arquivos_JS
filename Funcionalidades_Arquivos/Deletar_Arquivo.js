const fs = require("fs");


function Deletar_Arquivo() {

    const pasta = process.env.LOCAL_PASTA;
    const arquivo = pasta + "arquivo.txt"
    
    try{
        if (fs.existsSync(arquivo)) {
            fs.unlinkSync(arquivo)

            console.log("Arquivo deletado com sucesso.")
        }else {
            console.log("Arquivo não existe.")
        }
    }catch(err){
        console.log("Ocorreu um erro: ", err)
    }finally{
        console.log("Processo finalizado.")
    }
}

module.exports = Deletar_Arquivo;