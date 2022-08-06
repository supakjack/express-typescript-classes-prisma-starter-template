import { RouterConfig } from "./router_config";
import cors from "cors";
import express, { Application } from "express";
export class ApplicationConfig {
  constructor(
    protected application: Application = express(),
    protected port: number = Number(process.env.SERVER_PORT) || 4000
  ) {
    this.initial();
    this.start();
  }

  private initial(): void {
    this.application.use(cors());
    this.application.use(express.json());
    this.application.use(express.urlencoded({ extended: false }));
    new RouterConfig(this.application);
  }

  private start(): void {
    this.application.listen(this.port, () =>
      console.log(`run on http://localhost:${this.port}`)
    );
  }
}
