import modelListing from "../models/workoutListing.js";

export const createWorkout = async (req,res)=>{
     try{
        const workouListing = await modelListing.create(req.body)
            res.send(workouListing);
            }
    catch(error){
        res.json({error:error.message})
          }
        }

export const getWorkout=async (req,res)=>{
    try{
        const workoutView=await modelListing.find()
        res.send(workoutView);
    }
    catch(error){
        res.json({error:error.message})
    }
}

export const updatedWorkout=async(req,res)=>{
    try{
        const newWorkoutListing=await modelListing.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.send(newWorkoutListing);
    }
    catch(error){
        res.json({error:error.message})
    }
}

export const deletedWorkout = async(req,res)=>{
    try{
        await modelListing.findByIdAndDelete(req.params.id);
        res.send("Deletado com sucesso.")
    }
    catch(error){
        res.json({error:error.message})
    }
}

export const  workoutController={
    createWorkout,
    getWorkout,
    updatedWorkout,
    deletedWorkout
}