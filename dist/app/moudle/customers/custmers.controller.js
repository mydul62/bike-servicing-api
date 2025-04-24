"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersController = void 0;
const catchAsnc_1 = require("../../share/catchAsnc");
const sendResponse_1 = require("../../share/sendResponse");
const customers_service_1 = require("./customers.service");
const createCustomer = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield customers_service_1.customersService.createCustomerIntoDB(data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 201,
        message: "Customer created successfully",
        data: result
    });
}));
const getAllCustomers = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customers_service_1.customersService.getAllCustomersFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Customers fetched successfully",
        data: result
    });
}));
const getAllCustomersById = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customers_service_1.customersService.getSingleCustomersFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Customers fetched successfully",
        data: result
    });
}));
// update customer by id 
const updateCustomer = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield customers_service_1.customersService.updateCustomerIntoDB(id, data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Customer updated successfully",
        data: result
    });
}));
// update customer by id 
const deleteCustomer = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customers_service_1.customersService.deleteCustomerFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Customer deleted successfully",
        data: result
    });
}));
exports.customersController = {
    getAllCustomers,
    createCustomer,
    getAllCustomersById,
    updateCustomer,
    deleteCustomer
};
