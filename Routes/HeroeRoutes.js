const express = require("express");
const {
  getAllHeroes,
  createHeroe,
  getHeroeById,
  updateHeroe,
  deleteHeroe,
} = require("../controllers/HeroeController");
 
const router = express.Router();
 
router.route("/").get(getAllHeroes);
router.route("/").post(createHeroe);
router.route("/:id").get(getHeroeById);
router.route("/:id").put(updateHeroe);
router.route("/:id").delete(deleteHeroe);
 
module.exports = router;