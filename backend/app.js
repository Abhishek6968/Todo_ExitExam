const express=require('express');
const app=express();
app.use(express.json());
require('./db/connection');
const cors=require('cors');
const morgan=require('morgan');
app.use(morgan('dev'));
require('dotenv').config();
app.use(cors());
const PORT=process.env.PORT
const todo=require('./routes/basicRoutes');
app.use('/home',todo);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})