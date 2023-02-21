const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const heroeSchema = new Schema({
  name: String,
  imagen: String,
  comic: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Heroe", heroeSchema);