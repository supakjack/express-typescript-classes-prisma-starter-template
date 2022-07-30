import { Request, Response } from "express";

export interface IRestFulController {
  get(request: Request, response: Response): void;
  post(request: Request, response: Response): void;
  put(request: Request, response: Response): void;
  patch(request: Request, response: Response): void;
  delete(request: Request, response: Response): void;
}
