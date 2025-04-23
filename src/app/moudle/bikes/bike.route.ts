import express, { Request, Response } from 'express';
import { bikeController } from './bike.controller';

const router = express.Router();

router.post("/", bikeController.createBike);
router.get("/", bikeController.getAllBikes);
router.get("/:id", bikeController.getSingleBikesById);
router.put("/:id", bikeController.updateBikes);
router.delete("/:id", bikeController.deleteBike);

export const bikeRoutes= router;