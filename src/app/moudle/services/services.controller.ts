import { catchAsync } from "../share/catchAsnc";
import { sendResponse } from "../share/sendResponse";
import { Request, Response } from 'express';
import { servicesService } from "./services.service";


const createService =catchAsync( async (req: Request, res: Response) => {
    const data = req.body;
    const result = await servicesService.createServiceIntoDB(data);
    sendResponse(res, {
      success:true,
      statusCode:201,
      message:"Service record created successfully",
      data: result
 })
});

const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await servicesService.getAllServicesFromDB();
  sendResponse(res, {
    success:true,
    statusCode:200,
    message:"Service records fetched successfully",
    data: result
})
});


const getSingleServiceById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
    const result = await servicesService.getSingleServiceFromDB(id);

    sendResponse(res, {
      success:true,
      statusCode:200,
      message:"Service record fetched successfully",
      data: result
 })
})

// update service by id 
const updateService = catchAsync(async(req:Request, res:Response)=>{
  const {id}=req.params
  const data = req.body

  const result = await servicesService.updateServiceIntoDB(id,data)
  sendResponse(res, {
       success:true,
       statusCode:200,
       message:"Service marked as completed",
       data: result
  })
})

 

export const servicesController = {
  createService,
  getAllServices,
  getSingleServiceById,
  updateService,

}


