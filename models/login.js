var mongoose = require('mongoose');


var loginSchema = new mongoose.Schema({
	usuario: String,
    senha: String  
   
});





module.exports = mongoose.model('Usuario', loginSchema);