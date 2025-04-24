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
exports.BikeService = void 0;
const prismaClient_1 = require("../../share/prismaClient");
// create bike 
const createBikeIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.bike.create({
        data
    });
    return result;
});
// get all bikes 
const getAllBikesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.bike.findMany();
    console.log(result);
    return result;
});
// get single bike by id
const getSingleBikesFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.bike.findUniqueOrThrow({
        where: {
            bikeId: id,
        },
    });
    return result;
});
// update bike 
const updateBikeIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.bike.update({
        where: {
            bikeId: id
        },
        data
    });
    return result;
});
// delete bike 
const deleteBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.bike.delete({
        where: {
            bikeId: id
        }
    });
    return result;
});
exports.BikeService = {
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikesFromDB,
    updateBikeIntoDB,
    deleteBikeFromDB
};
