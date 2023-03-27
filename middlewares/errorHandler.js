function errorHandler(err, req, res, next) {
    // Definir mensajes de error predeterminados
    const statusMessages = {
      400: "Petición inválida",
      401: "No autorizado",
      403: "Prohibido",
      404: "Recurso no encontrado",
      500: "Error interno del servidor",
    };
  
    // Obtener el código de estado del error (si está presente)
    const statusCode = err.statusCode || 500;
  
    // Obtener el mensaje de error correspondiente al código de estado
    const statusMessage = statusMessages[statusCode];
  
    // Crear el objeto de respuesta con el código de estado y el mensaje de error
    const response = {
        message: statusMessage || "Error desconocido",
        status: statusCode,
    };
  
    // Enviar la respuesta al cliente
    res.status(statusCode).json(response);
  }
  
  export default errorHandler