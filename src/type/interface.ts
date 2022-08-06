import { Request, Response, NextFunction } from "express";

export interface IRestFulController {
  get(request: Request, response: Response, nextFuntion: NextFunction): void;
  post(request: Request, response: Response, nextFuntion: NextFunction): void;
  put(request: Request, response: Response, nextFuntion: NextFunction): void;
  patch(request: Request, response: Response, nextFuntion: NextFunction): void;
  delete(request: Request, response: Response, nextFuntion: NextFunction): void;
}

export interface IRestFulModel {
  select(): any;
  insert(): any;
  update(): any;
  delete(): any;
}
