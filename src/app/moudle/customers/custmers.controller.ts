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
      statusCode:201,
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
      statusCode:201,
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
export const customersController = {
  getAllCustomers,
  createCustomer,
  getAllCustomersById
}


