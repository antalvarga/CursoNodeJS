const express = require('express');
const mongoose = require( 'mongoose');

// vide em aula 8 faltando 02:26
const requireDir = require('require-dir');

// Inidicando o app
const app = express();

// aula 14
const cors = require('cors');
app.use(cors());


// aula 9= permitir que os dados sejam enviados no formato json
app.use(express.json());

// iniciando o BD
//mongoose.connect('mongodb://user@password')
//mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost:27017/nodeapi'
, {useUnifiedTopology: true
, useNewUrlParser: true});

//require('./src/models/Product');

// Instalar o require-dir

// Aula 8 faltando 02:13
requireDir('./src/models');

//const Product = mongoose.model('Product');

// primeira rota
/*
foi para o routes.js na aula 9
app.get('/', (req, res) => {
    Product.create({ 
        title: 'React Native'
        , description: 'Build native app with react'
        , url: 'http://github.com/facebook/react-native'
    });
    
    return res.send('Hello worldddd!');
});
*/

// Rotas
app.use('/api', require('./src/routes'));
app.listen(3001);
