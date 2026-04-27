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
                                                    const workouListing = await modelListing.create(req.body)
                                                            res.send(workouListing);
                                                                }
                                                                    catch(error){
                                                                            res.json({error:error.message})
                                                                                }
                                                                                })

                                                                                app.get("/listar", async (req,res)=>{
                                                                                    try{
                                                                                            const workoutView = await modelListing.find();
                                                                                                    res.send(workoutView);
                                                                                                        }
                                                                                                            catch(error){
                                                                                                                    res.json({error:error.message});
                                                                                                                        }
                                                                                                                        })

                                                                                                                        app.put("/listar/:id", async (req,res)=>{
                                                                                                                            try{
                                                                                                                                    const newWorkoutListing = await modelListing.findByIdAndUpdate(
                                                                                                                                                req.params.id,
                                                                                                                                                            req.body,
                                                                                                                                                                        {new:true}
                                                                                                                                                                                )
                                                                                                                                                                                        res.send(newWorkoutListing);
                                                                                                                                                                                            }
                                                                                                                                                                                                catch(error){
                                                                                                                                                                                                        res.json({error:error.message})
                                                                                                                                                                                                            }    
                                                                                                                                                                                                            })

                                                                                                                                                                                                            app.delete("/listar/:id", async(req,res)=>{
                                                                                                                                                                                                                try{
                                                                                                                                                                                                                        const workoutListingExcluded= await modelListing.findByIdAndDelete(
                                                                                                                                                                                                                                req.params.id,
                                                                                                                                                                                                                                        req.body,
                                                                                                                                                                                                                                                {new:true}
                                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                                            res.send(workoutListingExcluded);
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                    catch(error){
                                                                                                                                                                                                                                                                            res.json({error:error.message})
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                })


                                                                                                                                                                                                                                                                                app.listen(PORT,()=>{
                                                                                                                                                                                                                                                                                    console.log("Listening on port 3000")
                                                                                                                                                                                                                                                                                    })


                                                                                                                                                                                                                                                                                    