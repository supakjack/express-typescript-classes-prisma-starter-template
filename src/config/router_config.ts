import { AuthRouter } from "./../router/auth_router";
import { Application, Request, Response } from "express";
export class RouterConfig {
  constructor(private application: Application) {
    this.config();
  }
  private config() {
    this.application.use("/auth", new AuthRouter().getRouter());
    this.application.use((request: Request, response: Response) => {
      response.status(404);
      throw new Error("Routes - 404 Not Found");
    });
  }
}
