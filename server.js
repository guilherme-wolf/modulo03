const express = require ('express') // adiciona o express dentro da variavel e transforma ele em uma função //
const nunjucks = require ('nunjucks') // re-uso de codigo e logica para a apresentação de algumas paginas. 

const server = express()  // Executando o express

server.use(express.static('public')) // O express irá monitorar arquivos estaticos dentro da pasta public // 

server.set('view engine','html')

nunjucks.configure ('views' , {
    express: server
})

server.get("/", function(req , res){ // pegando a rota principal (/) abrindo uma função com 2 parametros requisição e resposta do server //
    return res.render("index") // respondendo algo para o cliente // 
})

server.get("/Sobre" , function(req, res){
     return res.render("Sobre")
})

server.listen (5000, function(){
    console.log ("server is running")
})