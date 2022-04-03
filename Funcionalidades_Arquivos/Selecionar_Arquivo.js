const fs = require('fs');


function Selecionar_Arquivos(dir){

    let struct = {}

    fs
        .readdirSync(dir)
        .sort((a, b) => fs.statSync(dir +"/"+ a).mtime.getTime() - fs.statSync(dir +"/"+ b).mtime.getTime()) //É AQUI QUE A MÁGICA ACONTECE
        .forEach(file => {

            if( fs.lstatSync(dir+"/"+file).isFile() ){
                struct[file] = null
            }
            else if( fs.lstatSync(dir+"/"+file).isDirectory() ){
                struct[file] = Selecionar_Arquivos(dir+"/"+file)
            }

        })

    console.log(struct)
    for (let k in struct){
        console.log(k)
    }

}

module.exports = Selecionar_Arquivos;