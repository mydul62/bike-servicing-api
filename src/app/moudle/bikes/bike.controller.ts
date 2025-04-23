import { catchAsync } from "../share/catchAsnc";
import { sendResponse } from "../share/sendResponse";
import { Request, Response } from 'express';
import { BikeService } from "./bike.service";

// create bike 
const createBike =catchAsync( async (req: Request, res: Response) => {
    const data = req.body;
    const result = await BikeService.createBikeIntoDB(data);
    sendResponse(res, {
      success:true,
      statusCode:201,
      message:"Bike added successfully",
      data: result
 })
});
//  get all bike 
const getAllBikes = catchAsync(async (req: Request, res: Response) => {
console.log("first")
  const result = await BikeService.getAllBikesFromDB();
  sendResponse(res, {
    success:true,
    statusCode:200,
    message:"Bikes fetched successfully",
    data: result
})
});

// get single bike 
const getSingleBikesById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
    const result = await BikeService.getSingleBikesFromDB(id);

    sendResponse(res, {
      success:true,
      statusCode:200,
      message:"Bike fetched successfully",
      data: result
 })
})

// update bike by id 
const updateBikes = catchAsync(async(req:Request, res:Response)=>{
  const {id}=req.params
  const data = req.body

  const result = await BikeService.updateBikeIntoDB(id,data)
  sendResponse(res, {
       success:true,
       statusCode:200,
       message:"Bike  updated successfully",
       data: result
  })
})
// delete bike by id 
const deleteBike = catchAsync(async(req:Request, res:Response)=>{
  const {id}=req.params

  const result = await BikeService.deleteBikeFromDB(id)
  sendResponse(res, {
       success:true,
       statusCode:200,
       message:"Bike  deleted successfully",
       data: result
  })
})
 

export const bikeController = {
  createBike,
  getAllBikes,
  getSingleBikesById,
  updateBikes,
  deleteBike
}


