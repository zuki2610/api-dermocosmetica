const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

usuarioSchema.pre('save', function(next) {
  const usuario = this;
  if (!usuario.isModified('password')) {
    return next();
  }
  bcrypt.hash(usuario.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    usuario.password = hash;
    next();
  });
});

module.exports = mongoose.model('Usuario', usuarioSchema);