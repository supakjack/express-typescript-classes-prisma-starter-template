import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";

export class Express {
  public static readonly application: Application = express();
  constructor(
    public readonly port: number = Number(process.env.SERVER_PORT || 4000)
  ) {
    this.config();
  }

  private config(): void {
    Express.application.use(cors());
    Express.application.use(express.json());
    Express.application.use(express.urlencoded({ extended: false }));
  }

  public start(): void {
    Express.application.listen(this.port, () =>
      console.log(`run on http://localhost:${this.port}`)
    );
  }
}
