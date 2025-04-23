import { Bike, ServiceRecord } from "@prisma/client";
import { prisma } from "../share/prismaClient";


// create services 
const createServiceIntoDB =async (data:ServiceRecord)=>{
     const result =prisma.serviceRecord.create({
     data
     })
     return result;
}

// get all services 
const getAllServicesFromDB =async ()=>{
  const result =prisma.serviceRecord.findMany()
  console.log(result)
  return result;
}

// get single service by id
const getSingleServiceFromDB =async (id:string)=>{
     const result =prisma.serviceRecord.findUniqueOrThrow({
      where: {
        serviceId: id, 
      },
     })
     return result;
}

// update Service 
const updateServiceIntoDB =async (id:string,data:Bike)=>{
  const result =prisma.serviceRecord.update({
  where:{
  serviceId:id
  },
  data
  })
  return result;
}

export const servicesService ={
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB,
}