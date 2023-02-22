const express = require("express");
const {
  getAllMedicinas,
  createMedicina,
  getMedicinaById,
  updateMedicina,
  deleteMedicina,
} = require("../controllers/MedicinaController");
 
const router = express.Router();
 
router.route("/").get(getAllMedicinas);
router.route("/").post(createMedicina);
router.route("/:id").get(getMedicinaById);
router.route("/:id").put(updateMedicina);
router.route("/:id").delete(deleteMedicina);
 
module.exports = router;