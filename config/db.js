import mongoose from 'mongoose';

const DB_URL = process.env.MONGO_URI;

async function connect(uri){
    try{
    await   mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Conexión a la base de datos establecida');
    }catch(err){
        console.error('Error al conectar con la base de datos:', err.message);
    }
}
connect(DB_URL)
export default mongoose;
