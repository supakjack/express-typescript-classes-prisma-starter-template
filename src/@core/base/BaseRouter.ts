import express, { Router } from "express";
import { IRestFulController } from "../interface";

export abstract class BaseRouter {
  constructor(
    private controller: IRestFulController,
    private router: Router = express.Router()
  ) {
    this.registerRoutes();
  }
  protected registerRoutes(): void {
    this.router.get("/", this.controller.get);
    this.router.post("/", this.controller.post);
    this.router.put("/", this.controller.put);
    this.router.patch("/", this.controller.patch);
    this.router.delete("/", this.controller.delete);
  }
  public getRouter(): Router {
    return this.router;
  }
}
