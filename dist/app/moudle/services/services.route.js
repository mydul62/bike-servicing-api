"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services.controller");
const router = express_1.default.Router();
router.get("/status", services_controller_1.servicesController.getAllOverdeuService);
router.post("/", services_controller_1.servicesController.createService);
router.get("/", services_controller_1.servicesController.getAllServices);
router.get("/:id", services_controller_1.servicesController.getSingleServiceById);
router.put("/:id", services_controller_1.servicesController.updateService);
exports.servicesRoutes = router;
