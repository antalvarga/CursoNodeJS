const mongoose = require('mongoose');

const Product = mongoose.model('Product');

/*
para evitar a mensagem
DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#findandmodify 
Usar a linha abaixo 
mongoose.set('useFindAndModify', false);
*/
module.exports = {
    async index (req, res) {
        //const products = await Product.find( { where } );
        //const products = await Product.find();
        //const products = await Product.paginate({}, {page: 1, limit:10 });

        // desestruturação ES6
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, {page, limit: 8});

        return res.json( products );
    },

    async show (req, res) {
        const product = await Product.findById(req.params.id);
        
        return res.json(product);
    },

    async store( req, res ) {
        // Criação
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update (req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        //const product = await Product.findByIdAndUpdate(req.params.id, 

        return res.json(product);
    },

    async destroy (req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}