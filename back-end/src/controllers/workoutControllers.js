import { after } from "node:test";
import modelListing from "../models/workoutListing.js";
import { error } from "node:console";

export const createWorkout = async (req,res,next)=>{
     try{
        const workouListing = await modelListing.create(req.body)
            res.send(workouListing).status(201);
            }
    catch(error){
        next(error)
          }
        }

export const getWorkout=async (req,res,next)=>{
    try{
        const workoutView=await modelListing.find()
        res.send(workoutView).status(200);
    }
    catch(error){
        next(error)
    }
}

export const updatedWorkout=async(req,res,next)=>{
    try{
        const newWorkoutListing=await modelListing.findByIdAndUpdate(
            req.params.id,
            req.body,
            {returnDocument:'after'}
        )
        if(!newWorkoutListing){
            return res.status(404).json({
                message: "Exercicio nao encontrado",
            });
        }
        res.send(newWorkoutListing).status(201);
    }
    catch(error){
        next(error)
    }
}

export const deletedWorkout = async(req,res,next)=>{
    try{
       const deletedWorkout= await modelListing.findByIdAndDelete(req.params.id);
        if(!deletedWorkout){
            return res.status(404).json({
                message: "Exercicio nao encontrado",
            });
        }
        res.send("Deletado com sucesso.")
    }
    catch(error){
        next(error)
    }
}

export const  workoutController={
    createWorkout,
    getWorkout,
    updatedWorkout,
    deletedWorkout
}