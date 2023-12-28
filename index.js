const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send("Welcome to my Browser")
})

app.listen(3000,()=>{
    console.log("server started at 3000//")
})