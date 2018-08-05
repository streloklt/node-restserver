const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es Obligatorio']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    }
});

module.exports = mongoose.model('categoria', categoriaSchema);