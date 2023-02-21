const CategoriaModel = require("../models/categoria");

exports.getAllCategorias = async () => {
  return await CategoriaModel.find();
};

exports.createCategoria = async (categoria) => {
  return await CategoriaModel.create(categoria);
};
exports.getCategoriaById = async (id) => {
  return await CategoriaModel.findById(id);
};

exports.updateCategoria = async (id, categoria) => {
  return await CategoriaModel.findByIdAndUpdate(id, categoria, { new: true });

};

exports.deleteCategoria = async (id) => {
  return await CategoriaModel.findByIdAndDelete(id);
};