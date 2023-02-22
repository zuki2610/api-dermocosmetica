const medicinaService = require("../services/MedicinaService");
const categoriaService = require("../services/CategoriaService");
 
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
    const categoryNames = req.body.categoriaNames;
    console.log('nombres de categoria en request body: ', categoryNames);
    
    const categoriaIds = await categoriaService.getCategoriaNamesByIds(categoryNames);
    console.log('categorias encontradas: ', categoriaIds);
    
    const data = {
      name: req.body.name,
      marcaId: req.body.marcaId,
      categoriaIds,
      componente: req.body.componente,
      imagenUrl: req.body.imagenUrl,
    };
    
    const medicina = await medicinaService.createMedicina(data);
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
    console.log(req.body);
    const categoryNames = req.body.categoriaNames;
    console.log('nombres de categoria en request body: ', categoryNames);
    
    const categoriaIds = await categoriaService.getCategoriaNamesByIds(categoryNames);
    console.log('categorias encontradas: ', categoriaIds);
    
    const data = {
      name: req.body.name,
      marcaId: req.body.marcaId,
      categoriaIds,
      componente: req.body.componente,
      imagenUrl: req.body.imagenUrl,
    };
    
    const medicina = await medicinaService.updateMedicina(req.params.id, data);
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