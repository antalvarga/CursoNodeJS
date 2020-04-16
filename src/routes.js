const express = require('express');
const routes = express.Router();
/*
routes.get('/', (req, res) => {
    
    Product.create({ 
        title: 'React Native'
        , description: 'Build native app with react'
        , url: 'http://github.com/facebook/react-native'
    });
    
    return res.send('Hello worldddd!');
});
*/
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index); 
routes.get('/products/:id', ProductController.show )
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;