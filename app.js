const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Puerto en el que se ejecutará la aplicación

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo
app.post('/echo', (req, res) => {
  res.json({ message: '¡Hola, mundo!' });
});

// Manejador de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
