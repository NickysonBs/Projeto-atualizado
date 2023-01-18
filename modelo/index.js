const express = require('express');
const server = express();
const path = require('path');

(async() =>{
    const database = require ('./db');
    const perfil = require('./modelo/perfil');

    try{
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await perfil.create({
            nome: 'Nathálya',
            sobrenome: 'Santos',
            telefone: '999999999',
            bairro: 'Centro',
            rua: 'Rua 1',
            cep: '59740-000',
            estado: 'RN',
            email: 'tarataratra@gmail.com',
            pais: 'Brasil',
            login: 'gabriel',
            senha: 'senha123'
        })

        const resultadoCreate2 = await perfil.create({
            nome: 'Nathálya',
            sobrenome: 'Santos',
            telefone: '999999999',
            bairro: 'Centro',
            rua: 'Rua 1',
            cep: '59740-000',
            estado: 'RN',
            email: 'tarataratra@gmail.com',
            pais: 'Brasil',
            login: 'gabriel',
            senha: 'senha123'
        })

        const resultadoCreate3 = await login.create({
            nome: 'gabriel',
            senha: 'senha123'
        })
        console.log(resultadoCreate);
        console.log(resultadoCreate2);
        console.log(resultadoCreate3);

    }catch(error){
        console.log(error);
    }
})();

server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/perfil.html'));   
})

server.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/projetoweb.html'));
})

server.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/register.html'));
})

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/login.html'));
})


server.listen(3000)