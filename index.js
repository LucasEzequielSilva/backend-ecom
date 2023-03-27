import express from 'express';
import 'dotenv/config.js'
import './config/db.js';
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import indexRouter from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()
const PORT = process.env.PORT || 8080;


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use('/api', indexRouter);

app.listen(PORT, ()=>{
    console.log("Servidor corriendo")
})
app.use(errorHandler)