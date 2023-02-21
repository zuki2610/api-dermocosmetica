const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const medicinaSchema = new Schema({
  name: String,
  categoriaId: String,
  marcaId: String,
  imagenUrl: String, 
  componente: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("medicina", medicinaSchema);