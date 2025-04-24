import { Bike } from "@prisma/client";
import { prisma } from "../../share/prismaClient";


// create bike 
const createBikeIntoDB =async (data:Bike)=>{
     const result =prisma.bike.create({
     data
     })
     return result;
}

// get all bikes 
const getAllBikesFromDB =async ()=>{
  const result =prisma.bike.findMany()
  console.log(result)
  return result;
}

// get single bike by id
const getSingleBikesFromDB =async (id:string)=>{
     const result =prisma.bike.findUniqueOrThrow({
      where: {
        bikeId: id, 
      },
     })
     return result;
}

// update bike 
const updateBikeIntoDB =async (id:string,data:Bike)=>{
  const result =prisma.bike.update({
  where:{
  bikeId:id
  },
  data
  })
  return result;
}
// delete bike 
const deleteBikeFromDB =async (id:string)=>{
  const result =prisma.bike.delete({
  where:{
  bikeId:id
  }
  })
  return result;
}
export const BikeService ={

  createBikeIntoDB,
getAllBikesFromDB,
getSingleBikesFromDB,
updateBikeIntoDB,
deleteBikeFromDB
}