const usuarioService = require('../services/UsuarioService');

// Controlador para crear un nuevo usuario
exports.crearUsuario = async(req, res) => {
  try {
    // Llamamos a la función "guardarUsuario" del servicio "UsuarioService" para guardar el nuevo usuario
    const usuarioGuardado = await usuarioService.guardarUsuario(req.body);

    // Enviamos la respuesta con el usuario guardado en la base de datos
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    // Si hay algún error, enviamos una respuesta con el código de error correspondiente y un mensaje de error
    res.status(400).json({ error: error.message });
  }
}

// Controlador para obtener un usuario por email
exports.obtenerUsuarioPorEmail =  async(req, res) => {
  try {
    // Llamamos a la función "obtenerUsuarioPorEmail" del servicio "UsuarioService" para obtener el usuario
    const usuarioEncontrado = await usuarioService.obtenerUsuarioPorEmail(req.params.email);

    // Si el usuario existe, enviamos la respuesta con el usuario
    if (usuarioEncontrado) {
      res.json(usuarioEncontrado);
    } else {
      // Si el usuario no existe, enviamos una respuesta con el código de error correspondiente y un mensaje de error
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    // Si hay algún error, enviamos una respuesta con el código de error correspondiente y un mensaje de error
    res.status(400).json({ error: error.message });
  }
}
