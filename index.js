const express=require("express")
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
const {homeDetails}=require("./homeDetails.json")

app.get('/',(req,res)=>{
    res.send("Welcome to my Browser")
})

app.get('/list',(req,res)=>{
    res.send(homeDetails)
})

app.listen(4000,()=>{
    console.log("Server started at 4000//")
})
