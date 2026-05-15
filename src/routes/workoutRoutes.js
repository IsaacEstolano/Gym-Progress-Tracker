import { workoutController } from "../controllers/workoutControllers.js";
import { workoutValidation } from "../middleware/workoutValidation.js";
import express from "express"

const routes= express.Router();


routes.get("/",workoutController.getWorkout)
routes.post("/",workoutValidation,workoutController.createWorkout);
routes.put("/:id",workoutController.updatedWorkout);
routes.delete("/:id",workoutController.deletedWorkout);

export default routes;