import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './Database/Config.js';
import cors from 'cors';

import authRouter from  './Routers/authRouter.js';
import userRouter from './Routers/userRouter.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors( ))

const port = process.env.PORT || 5000;


ConnectDB();

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});

export default app;