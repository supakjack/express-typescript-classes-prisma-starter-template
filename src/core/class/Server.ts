import { IResponseRestFul } from "./../interface/IResponseRestFul";
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

export class Server {
  constructor(
    private application: Application = express(),
    private port: number = Number(process.env.SERVER_PORT || 4000)
  ) {
    this.config();
  }

  private config(): void {
    this.application.use(cors());
    this.application.use(express.json());
    this.application.use(express.urlencoded({ extended: false }));
  }

  public errorHandle(): void {
    this.application.use(
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

  public start(): void {
    this.application.listen(this.port, () =>
      console.log(`run on http://localhost:${this.port}`)
    );
  }

  public getApplication(): Application {
    return this.application;
  }
}
