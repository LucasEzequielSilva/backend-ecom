import mongoose from "mongoose";
import 'dotenv/config.js'
const categories = [
  { name: "chocolates" },
  { name: "aceites" },
  { name: "cremas" }
];

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos');
    // Insertar los documentos en la colección categories
    mongoose.connection.db.collection('categories').insertMany(categories)
      .then(() => console.log('Documentos insertados exitosamente'))
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));