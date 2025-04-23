import express, { Request, Response } from 'express';
import { customersController } from './custmers.controller';

const router = express.Router();

router.post("/", customersController.createCustomer);
router.get("/", customersController.getAllCustomers);
router.get("/:id", customersController.getAllCustomersById);
router.put("/:id", customersController.updateCustomer);
router.delete("/:id", customersController.deleteCustomer);

export const customerRoute= router;