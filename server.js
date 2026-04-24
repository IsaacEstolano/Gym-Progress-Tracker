import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import modelListing from "./src/models/workoutListing.js"

dotenv.config();
const app=express();
const PORT= 3000;

app.use(express.json())
const conectMDB = async () => {
    try{
        await mongoose.connect(process.env.mongo_URL)
        console.log("Conectado");
    }
    catch(error){
        console.log("Erro ao conectar",error)
    }
}
conectMDB();

app.post("/listar",async (req, res)=>{
    try{
        const newWorkouListing = await modelListing.create(req.body)
        res.send(newWorkouListing);
    }
    catch(error){
        res.json({error:error.message})
    }
})

app.listen(PORT,()=>{
    console.log("Listening on port 3000")
})


