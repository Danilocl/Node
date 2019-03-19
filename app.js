//Chama o framework express
const express = require('express');
const app = express();

//Cria os metodos de requisicoes
app.get('/',(req,res) => {
    let obj = req.query;
    return res.send({message: `Você enviou o nome ${obj.nome} com a idade: ${obj.idade} anos!`});
});


app.post('/',(req,res) => {
    return res.send({message: 'Tudo ok com o método POST!'})
});

//Especifica a porta à ser escutada no navegador
app.listen(3000);

module.exports = app;