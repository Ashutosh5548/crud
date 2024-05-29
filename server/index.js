const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const app = express()
app.use(cors())
app.use(express.json())

// mongo_connect
mongoose
    .connect("mongodb+srv://Ashutosh:Ashutosh1234@cluster1.qxvxv6c.mongodb.net/crud?retryWrites=true&w=majority")
    .then(()=>{
        console.log("connected")
    })
    .catch((err)=>{
        console.log("error",err)
    })
 
// post_request
app.post("/createUser",async(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// get_request
app.get("/",(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.get("/getUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})