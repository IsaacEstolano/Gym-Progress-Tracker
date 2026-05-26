import modelListing from "../models/workoutListing.js";

export const createWorkout = async (req,res,next)=>{
     try{
        const workouListing = await modelListing.create(req.body)
            res.send(workouListing);
            }
    catch(error){
        next(error)
          }
        }

export const getWorkout=async (req,res,next)=>{
    try{
        const workoutView=await modelListing.find()
        res.send(workoutView);
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
            {new:true}
        )
        res.send(newWorkoutListing);
    }
    catch(error){
        next(error)
    }
}

export const deletedWorkout = async(req,res,next)=>{
    try{
        await modelListing.findByIdAndDelete(req.params.id);
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