const express = require('express');

const server = express();

server.use(express.json());

const users = [];

server.get('/', (req,res) => {
    return res.json({
        result: "Cadastro de Usuários da GrowDev"
    });
});

server.get('/users' , (req,res) => {
    return res.json({users});
});

server.get('/users/:id', (req,res) =>{
    const {id} = req.params;

    return res.json({
        result: 'usuario encontrado com sucesso',
        user: users[id]
    });
});

server.put('/users/:id',(req,res) => {
    const {email,name,age,phone} = req.body
    const {id} = req.params;

    const user = {
        name,
        email,
        age,
        phone
    };

    users[id] = user;

    return res.json({
        result: 'dados atualizados com sucesso',
        user: user
    })
})

server.post('/users' , (req,res) =>{
   const {email,name,age,phone} = req.body

    const user = {
        name,
        email,
        age,
        phone
    };
    users.push(user);

    return res.json(user);
})

server.listen(3000);