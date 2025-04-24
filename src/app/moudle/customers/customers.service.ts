import { Customer } from "@prisma/client";
import { prisma } from "../../share/prismaClient";


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

// update customer 
const updateCustomerIntoDB =async (id:string,data:Customer)=>{
  const result =prisma.customer.update({
  where:{
  customerId:id
  },
  data
  })
  return result;
}
// delete customer 
const deleteCustomerFromDB =async (id:string)=>{
  const result =prisma.customer.delete({
  where:{
  customerId:id
  }
  })
  return result;
}
export const customersService ={
  getAllCustomersFromDB,
  createCustomerIntoDB,
  getSingleCustomersFromDB,
  updateCustomerIntoDB,
  deleteCustomerFromDB
}