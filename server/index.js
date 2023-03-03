import express from 'express';
import DataConnect from './database/connect.js';
import DefaultData from './default.js';
import Route from './routes/routes.js';
import cors from 'cors'
import dotenv from 'dotenv'



const app = express();
dotenv.config();


app.use(cors());
app.use('/', Route);


const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD

DataConnect(username, password);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

DefaultData();