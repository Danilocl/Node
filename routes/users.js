const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    return res.send({message: `Tudo ok com o método GET da rota users`});
});

router.post('/',(req,res) => {
    return res.send({message: `Tudo ok com o método POST rota users`});
});

router.post('/create',(req,res) => {    
    return res.send({message: `Seu usuário foi criado!!`});
});

module.exports = router;