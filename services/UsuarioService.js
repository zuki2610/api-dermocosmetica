const Usuario = require('../models/Usuario');

// Exportamos la función guardarUsuario para que pueda ser utilizada en otros archivos
exports.guardarUsuario = async(usuario) => {
  try {
    // Creamos una instancia del modelo Usuario con los datos recibidos
    const usuarioModel = new Usuario(usuario);

    // Ciframos la contraseña del usuario utilizando el middleware definido en el modelo
    await usuarioModel.save();

    // Si todo sale bien, devolvemos el usuario guardado en la base de datos
    return usuarioModel;
  } catch (error) {
    // Si hay algún error, lanzamos una excepción con el mensaje de error correspondiente
    throw new Error(`Error al guardar el usuario: ${error.message}`);
  }
}

exports.obtenerUsuarioPorEmail = async(email) => {
    try {
      const usuarioEncontrado = await Usuario.findOne({ email: email });
      return usuarioEncontrado;
    } catch (error) {
      throw new Error(`Error al obtener el usuario: ${error.message}`);
    }
  }