"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoute = void 0;
const express_1 = __importDefault(require("express"));
const custmers_controller_1 = require("./custmers.controller");
const router = express_1.default.Router();
router.post("/", custmers_controller_1.customersController.createCustomer);
router.get("/", custmers_controller_1.customersController.getAllCustomers);
router.get("/:id", custmers_controller_1.customersController.getAllCustomersById);
router.put("/:id", custmers_controller_1.customersController.updateCustomer);
router.delete("/:id", custmers_controller_1.customersController.deleteCustomer);
exports.customerRoute = router;
