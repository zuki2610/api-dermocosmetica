const express = require('express');
const usuarioController = require('../controllers/UsuarioController');

// Creamos un enrutador para manejar las rutas relacionadas con el recurso "usuario"
const router = express.Router();

// Definimos las rutas y los controladores correspondientes
router.post('/', usuarioController.crearUsuario);
router.get('/:email', usuarioController.obtenerUsuarioPorEmail);

module.exports = router;
