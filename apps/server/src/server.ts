import express from 'express';
//@ts-ignore
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./config/db";
import kanbanRoutes from './routes/kanbanRoutes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//DB connection
connectDB();

//Routes
app.use('/api/kanban',kanbanRoutes);

app.listen(PORT,()=>{
    console.log('Server started on port',PORT);
})