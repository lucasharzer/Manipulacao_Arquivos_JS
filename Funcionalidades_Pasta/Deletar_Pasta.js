const fs = require("fs");


function Deletar_Pasta() {

    const pasta = process.env.LOCAL_PASTA;
    
    if (fs.existsSync(pasta)){
        fs.rmdir(pasta, (err) => {
            if (err){
                console.log("Erro ao tentar deletar a pasta.")
                return err
            }

            console.log("Pasta deletada.")
        })
    }else {
        console.log("Essa pasta não existe.")
    }
}

module.exports = Deletar_Pasta;