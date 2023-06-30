const express=require('express');
const app=express()
const port= "3000"
const pool=require('./db/db');
// const userRouter=require('./router/userRouter');s

pool.connect();

app.use(express.json());
// app.use(userRouter);

app.get("/user",(req,res)=>{
    pool.query(`select * from students`,(err,result)=>{
        if (!err) {
            res.send(result.rows);
        }
    })
    pool.end;
})

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`server runs on ${port}`);
})