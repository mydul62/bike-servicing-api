import { catchAsync } from "../share/catchAsnc";
import { sendResponse } from "../share/sendResponse";
import { customersService } from "./customers.service";
import { Request, Response } from 'express';


const createCustomer = async (req: Request, res: Response) => {
  try {
    const data = req.body;


    const result = await customersService.createCustomerIntoDB(data);

    sendResponse(res, {
      success:true,
      statusCode:201,
      message:"Customer created successfully",
      data: result
 })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create customer',
    });
  }
};
const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const result = await customersService.getAllCustomersFromDB();

    sendResponse(res, {
      success:true,
      statusCode:200,
      message:"Customers fetched successfully",
      data: result
 })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fatch customer',
    });
  }
};
const getAllCustomersById = async (req: Request, res: Response) => {
  try {
  const {id} = req.params;

    const result = await customersService.getSingleCustomersFromDB(id);

    sendResponse(res, {
      success:true,
      statusCode:200,
      message:"Customers fetched successfully",
      data: result
 })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fatch customer',
    });
  }
};

// update customer by id 
const updateCustomer = catchAsync(async(req:Request, res:Response)=>{
  const {id}=req.params
  const data = req.body

  const result = await customersService.updateCustomerIntoDB(id,data)
  sendResponse(res, {
       success:true,
       statusCode:200,
       message:"Customer updated successfully",
       data: result
  })
})
// update customer by id 
const deleteCustomer = catchAsync(async(req:Request, res:Response)=>{
  const {id}=req.params

  const result = await customersService.deleteCustomerFromDB(id)
  sendResponse(res, {
       success:true,
       statusCode:200,
       message:"Customer deleted successfully",
       data: result
  })
})
 

export const customersController = {
  getAllCustomers,
  createCustomer,
  getAllCustomersById,
  updateCustomer,
  deleteCustomer
}


