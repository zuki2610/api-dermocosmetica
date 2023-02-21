const HeroeModel = require("../models/Heroe");

exports.getAllHeroes = async () => {
  return await HeroeModel.find();
};

exports.createHeroe = async (heroe) => {
  return await HeroeModel.create(heroe);
};
exports.getHeroeById = async (id) => {
  return await HeroeModel.findById(id);
};

exports.updateHeroe = async (id, heroe) => {
  return await HeroeModel.findByIdAndUpdate(id, heroe, { new: true });

};

exports.deleteHeroe = async (id) => {
  return await HeroeModel.findByIdAndDelete(id);
};