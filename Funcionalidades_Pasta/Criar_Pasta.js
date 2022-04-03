const fs = require("fs");


function Criar_Pasta() {

    const pasta = process.env.LOCAL_PASTA;
    
    if (!fs.existsSync(pasta)){
        fs.mkdir(pasta, (err) => {
            if (err){
                console.log("Erro na criação de pasta.")
                return err
            }

            console.log("Pasta Criada.")
        })
    }else {
        console.log("Essa pasta já existe.")
    }
}

module.exports = Criar_Pasta;