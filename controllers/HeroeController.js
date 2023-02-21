const heroeService = require("../services/HeroeService");
 
exports.getAllHeroes = async (req, res) => {
  try {
    const heroes = await heroeService.getAllHeroes();
    res.json({ data: heroes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createHeroe = async (req, res) => {
  try {
    console.log(req.body);
    const heroe = await heroeService.createHeroe(req.body);
    res.json({ data: heroe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getHeroeById = async (req, res) => {
  try {
    const heroe = await heroeService.getHeroeById(req.params.id);
    res.json({ data: heroe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateHeroe = async (req, res) => {
  try {
    const heroe = await heroeService.updateHeroe(req.params.id, req.body);
    res.json({ data: heroe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteHeroe = async (req, res) => {
  try {
    const heroe = await heroeService.deleteHeroe(req.params.id);
    res.json({ data: heroe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};