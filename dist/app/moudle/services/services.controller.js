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
exports.servicesController = void 0;
const catchAsnc_1 = require("../../share/catchAsnc");
const sendResponse_1 = require("../../share/sendResponse");
const services_service_1 = require("./services.service");
const createService = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield services_service_1.servicesService.createServiceIntoDB(data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 201,
        message: "Service record created successfully",
        data: result
    });
}));
const getAllServices = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.servicesService.getAllServicesFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Service records fetched successfully",
        data: result
    });
}));
const getAllOverdeuService = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.servicesService.getAllStatusServicesFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Service records fetched successfully",
        data: result
    });
}));
const getSingleServiceById = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_service_1.servicesService.getSingleServiceFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Service record fetched successfully",
        data: result
    });
}));
// update service by id 
const updateService = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield services_service_1.servicesService.updateServiceIntoDB(id, data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Service marked as completed",
        data: result
    });
}));
exports.servicesController = {
    createService,
    getAllServices,
    getSingleServiceById,
    updateService,
    getAllOverdeuService
};
