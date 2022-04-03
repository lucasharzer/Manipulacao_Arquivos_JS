const fs = require("fs");


function Criar_Arquivo() {

    const pasta = process.env.LOCAL_PASTA;
    const arquivo = pasta + "arquivo.txt"
    
    try{
        if (!fs.existsSync(arquivo)) {
            fs.writeFile(arquivo, "Hello World :)", (err) => {
                if (err) throw (err)
    
                console.log("Arquivo foi criado com sucesso.")
            })
        }else {
            console.log("Arquivo já existe.")
        }
    }catch(err){
        console.log("Ocorreu um erro: ", err)
    }finally{
        console.log("Processo finalizado.")
    }
}

module.exports = Criar_Arquivo;