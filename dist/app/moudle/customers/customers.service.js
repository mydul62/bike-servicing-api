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
exports.customersService = void 0;
const prismaClient_1 = require("../../share/prismaClient");
// create customer 
const createCustomerIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.customer.create({
        data
    });
    return result;
});
// get all customer 
const getAllCustomersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.customer.findMany();
    return result;
});
// get single customer by id
const getSingleCustomersFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    return result;
});
// update customer 
const updateCustomerIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.customer.update({
        where: {
            customerId: id
        },
        data
    });
    return result;
});
// delete customer 
const deleteCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prismaClient_1.prisma.customer.delete({
        where: {
            customerId: id
        }
    });
    return result;
});
exports.customersService = {
    getAllCustomersFromDB,
    createCustomerIntoDB,
    getSingleCustomersFromDB,
    updateCustomerIntoDB,
    deleteCustomerFromDB
};
