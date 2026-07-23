import { workoutController } from "../controllers/workoutControllers.js";
import { workoutValidation ,updateWworkoutValidation } from "../middleware/workoutValidation.js";
import express from "express"

const routes= express.Router();

routes.get("/",workoutValidation,workoutController.getWorkout)
routes.post("/",workoutValidation,workoutValidation,workoutController.createWorkout);
routes.put("/:id",updateWworkoutValidation,workoutController.updatedWorkout);
routes.delete("/:id",workoutController.deletedWorkout);

export default routes;