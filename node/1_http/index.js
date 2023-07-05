const http = require('http')
var utf8 = require('utf8') 
// console.log(http);clear

const PORT = 5000

// const server = http.createServer((req, res)=>{
//     res.write('Olá, Mundo!')
//     res.end()
// })

// const server = http.createServer((req, res)=>{
//     if(req.url === '/home'){
//         res.writeHead(200, {'content-type':'text/plan'})
//         res.write('Página Home')
//         res.end()
//     }else if(req.url === '/sobre'){
//         res.writeHead(200, {'content-type':'text/plan'})
//         res.write('Página Sobre')
//         res.end()
//     }else{
//         res.writeHead(404, {'content-type':'text/plan'})
//         res.write('Página Não Encontrada')
//         res.end()
//     }
// })

const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.writeHead(200, {'content-type':'text/html; charset=UTF-8'})
        res.write('<h1> Página Home </h1>')
        res.write('<p> esta é a Página Home </p>')
        res.end()
    }
    else if(req.url === '/sobre'){
        res.writeHead(200, {'content-type':'text/html; charset=UTF-8'})
        res.write('<h1> Página Sobre </h1>')
        res.write('<p> esta é a Página Sobre </p>')
        res.end()
    }
    else if(req.url === '/contato'){
        res.writeHead(200, {'content-type':'text/html; charset=UTF-8'})
        res.write('<h1> Página Contato </h1>')
        res.write('<p> esta é a Página Contato </p>')
        res.end()
    }
    else{
        res.writeHead(404, {'content-type':'text/html; charset=UTF-8'})
        res.write('<h1> Página não encontarda </h1>')
        res.end()
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}😎`)
})