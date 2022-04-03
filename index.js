require("dotenv/config");

// Pasta
const Criar_Pasta = require("./Funcionalidades_Pasta/Criar_Pasta");
const Verificar_Pasta = require("./Funcionalidades_Pasta/Verificar_Pasta");
const Deletar_Pasta = require("./Funcionalidades_Pasta/Deletar_Pasta");

// Arquivo
const Criar_Arquivo = require("./Funcionalidades_Arquivos/Criar_Arquivo");
const Verificar_Arquivo = require("./Funcionalidades_Arquivos/Verificar_Arquivo");
const Escrever_Arquivo = require("./Funcionalidades_Arquivos/Escrever_Arquivo");
const Ler_Arquivo = require("./Funcionalidades_Arquivos/Ler_Arquivo");
const Renomear_Arquivo = require("./Funcionalidades_Arquivos/Renomear_Arquivo");
const Deletar_Arquivo = require("./Funcionalidades_Arquivos/Deletar_Arquivo");
const Selecionar_Arquivos = require("./Funcionalidades_Arquivos/Selecionar_Arquivo");


const pasta = process.env.LOCAL_PASTA;

// Criar Pasta
Criar_Pasta()

// Verificar se a pasta existe ou não
Verificar_Pasta()

// Deletar Pasta 
Deletar_Pasta()

// Criar Arquivo
Criar_Arquivo()

// Verificar se o arquivo existe ou não
Verificar_Arquivo()

// Criar arquivo
Escrever_Arquivo()

// Ler arquivo
Ler_Arquivo()

// Renomear arquivo
Renomear_Arquivo()

// Deletar arquivo
Deletar_Arquivo()

// Selecionar arquivos em uma pasta
Selecionar_Arquivos(pasta)