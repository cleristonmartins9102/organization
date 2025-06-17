import { Controller } from "@/application/contracts/controller";
import { NextFunction, Request, Response } from "express";

export const expressAdapter = (controller: Controller): any => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(req.query)
    const response = await controller.handler({ body: req.body, query: req.query, params: req.params })
    res.status(response.statusCode).json(response.body)
  }
}