import express, { Application, NextFunction, Request, Response } from "express";
import { IResponseRestFul } from "../interface";

export class ErrorHelper {
  public static start(): void {
    const application: Application = express();
    application.use(
      (
        error: Error,
        request: Request,
        response: Response,
        nextFunction: NextFunction
      ) => {
        console.error(
          "====> Start error message \n",
          {
            name: error.name,
            statusCode: response.statusCode,
            message: error.message,
            stack: error.stack,
          },
          "\n====> End error message \n"
        );
        const errorResponse: IResponseRestFul = {
          meta: {
            code: response.statusCode,
            message: error.message,
          },
        };
        response.status(response.statusCode).json(errorResponse);
      }
    );
  }
}
