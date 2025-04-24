import express, { Request, Response } from 'express';
import { servicesController } from './services.controller';

const router = express.Router();

router.get("/status", servicesController.getAllOverdeuService);
router.post("/", servicesController.createService);
router.get("/", servicesController.getAllServices);
router.get("/:id", servicesController.getSingleServiceById);
router.put("/:id", servicesController.updateService);


export const servicesRoutes= router;