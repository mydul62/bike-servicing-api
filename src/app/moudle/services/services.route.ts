import express, { Request, Response } from 'express';
import { servicesController } from './services.controller';

const router = express.Router();

router.post("/", servicesController.createService);
router.get("/", servicesController.getAllServices);
router.get("/:id", servicesController.getSingleServiceById);
router.put("/:id", servicesController.updateService);


export const servicesRoutes= router;