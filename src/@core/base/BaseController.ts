import { Request, Response } from "express";
import { IRestFulController } from "../interface";

export abstract class BaseController implements IRestFulController {
  public get(request: Request, response: Response): void {
    throw new Error("Controller - Method get not implemented.");
  }
  public post(request: Request, response: Response): void {
    throw new Error("Controller - Method post not implemented.");
  }
  public put(request: Request, response: Response): void {
    throw new Error("Controller - Method put not implemented.");
  }
  public patch(request: Request, response: Response): void {
    throw new Error("Controller - Method patch not implemented.");
  }
  public delete(request: Request, response: Response): void {
    throw new Error("Controller - Method delete not implemented.");
  }
}
