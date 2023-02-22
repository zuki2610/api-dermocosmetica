const MedicinaModel = require("../models/Medicina");
const CategoriaService = require("./CategoriaService");

exports.getAllMedicinas = async () => {
  return await MedicinaModel.find();
};

exports.createMedicina = async (medicina) => {
  console.log('medicina', medicina);
  return await MedicinaModel.create(medicina);
};
exports.getMedicinaById = async (id) => {
  return await MedicinaModel.findById(id);
};

exports.updateMedicina = async (id, medicina) => {
  return await MedicinaModel.findByIdAndUpdate(id, medicina, { new: true });

};

exports.deleteMedicina = async (id) => {
  return await MedicinaModel.findByIdAndDelete(id);
};