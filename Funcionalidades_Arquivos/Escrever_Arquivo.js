const fs = require("fs");


function Escrever_Arquivo() {

    const pasta = process.env.LOCAL_PASTA;
    const arquivo = pasta + "arquivo.txt"
    const mensagem = "Linguagens de Programação:\n\n- Python\n- JavaScript\n- Golang\n- C#"
    
    try{
        if (fs.existsSync(arquivo)) {
            fs.writeFile(arquivo, mensagem, (err) => {
                if (err) throw (err)
    
                console.log("Modificações feitas.")
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

module.exports = Escrever_Arquivo;