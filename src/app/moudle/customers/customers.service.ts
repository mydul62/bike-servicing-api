import { Customer } from "@prisma/client";
import { prisma } from "../share/prismaClient";


// create customer 
const createCustomerIntoDB =async (data:Customer)=>{
     const result =prisma.customer.create({
     data
     })
     return result;
}

// get all customer 
const getAllCustomersFromDB =async ()=>{
  const result =prisma.customer.findMany()
  return result;
}

// get single customer by id
const getSingleCustomersFromDB =async (id:string)=>{
     const result =prisma.customer.findUniqueOrThrow({
      where: {
        customerId: id, 
      },
     })
     return result;
}


export const customersService ={
  getAllCustomersFromDB,
  createCustomerIntoDB,
  getSingleCustomersFromDB
}