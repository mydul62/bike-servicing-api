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
exports.bikeController = void 0;
const catchAsnc_1 = require("../../share/catchAsnc");
const sendResponse_1 = require("../../share/sendResponse");
const bike_service_1 = require("./bike.service");
// create bike 
const createBike = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield bike_service_1.BikeService.createBikeIntoDB(data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 201,
        message: "Bike added successfully",
        data: result
    });
}));
//  get all bike 
const getAllBikes = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.BikeService.getAllBikesFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Bikes fetched successfully",
        data: result
    });
}));
// get single bike 
const getSingleBikesById = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bike_service_1.BikeService.getSingleBikesFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Bike fetched successfully",
        data: result
    });
}));
// update bike by id 
const updateBikes = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield bike_service_1.BikeService.updateBikeIntoDB(id, data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Bike  updated successfully",
        data: result
    });
}));
// delete bike by id 
const deleteBike = (0, catchAsnc_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bike_service_1.BikeService.deleteBikeFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Bike  deleted successfully",
        data: result
    });
}));
exports.bikeController = {
    createBike,
    getAllBikes,
    getSingleBikesById,
    updateBikes,
    deleteBike
};
