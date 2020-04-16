const mongoose = require('mongoose');

// aula 13 - Paginaçao da lista
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String
        , required: true
        ,
    },
    description: {
        type: String
        , required: true
        ,
    },
    url: {
        type: String
        , required: true,
    },
    createdAt: {
        type: Date
        , default: Date.now
        ,
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);
