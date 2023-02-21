const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const categoriaSchema = new Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("categoria", categoriaSchema);