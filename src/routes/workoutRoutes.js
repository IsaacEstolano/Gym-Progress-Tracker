import { workoutController } from "../controllers/workoutControllers.js";
import express from "express"

const routes= express.Router();

routes.get("/",workoutController.getWorkout)
routes.post("/",workoutController.createWorkout);
routes.put("/:id",workoutController.updatedWorkout);
routes.delete("/:id",workoutController.deletedWorkout);

export default routes;