const medicinaService = require("../services/MedicinaService");
 
exports.getAllMedicinas = async (req, res) => {
  try {
    const medicinas = await medicinaService.getAllMedicinas();
    res.json({ data: medicinas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createMedicina = async (req, res) => {
  try {
    console.log(req.body);
    const medicina = await medicinaService.createMedicina(req.body);
    res.json({ data: medicina, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getMedicinaById = async (req, res) => {
  try {
    const medicina = await medicinaService.getMedicinaById(req.params.id);
    res.json({ data: medicina, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateMedicina = async (req, res) => {
  try {
    const medicina = await medicinaService.updateMedicina(req.params.id, req.body);
    res.json({ data: medicina, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteMedicina = async (req, res) => {
  try {
    const medicina = await medicinaService.deleteMedicina(req.params.id);
    res.json({ data: medicina, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};