import { Bike, ServiceRecord } from "@prisma/client";
import { prisma } from "../../share/prismaClient";
import {subDays} from "date-fns"

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
  return result;
}


const getAllStatusServicesFromDB =async ()=>{
  const sevenDayAgo = subDays(new Date(), 7)
  const result = await prisma.serviceRecord.findMany({
      where:{
          status:{
              in:['pending','in_progress']
          },
          serviceDate:{
              lt:sevenDayAgo
          }
      }
  })
  return result
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
  getAllStatusServicesFromDB
}