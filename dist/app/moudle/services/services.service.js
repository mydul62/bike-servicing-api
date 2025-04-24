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
exports.servicesService = void 0;
const prismaClient_1 = require("../../share/prismaClient");
const date_fns_1 = require("date-fns");
// create services 
const createServiceIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.serviceRecord.create({
        data
    });
    return result;
});
// get all services 
const getAllServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.serviceRecord.findMany();
    return result;
});
const getAllStatusServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDayAgo = (0, date_fns_1.subDays)(new Date(), 7);
    const result = yield prismaClient_1.prisma.serviceRecord.findMany({
        where: {
            status: {
                in: ['pending', 'in_progress']
            },
            serviceDate: {
                lt: sevenDayAgo
            }
        }
    });
    return result;
});
// get single service by id
const getSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    return result;
});
// update Service 
const updateServiceIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.serviceRecord.update({
        where: {
            serviceId: id
        },
        data
    });
    return result;
});
exports.servicesService = {
    createServiceIntoDB,
    getAllServicesFromDB,
    getSingleServiceFromDB,
    updateServiceIntoDB,
    getAllStatusServicesFromDB
};
