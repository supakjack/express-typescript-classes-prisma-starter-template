import { AccountRouter } from "./router";
import express, { Request, Response } from "express";

const routes = (server: express.Application): void => {
  server.use("/account", new AccountRouter().getRouter());
  server.use((request: Request, response: Response) => {
    response.status(404);
    throw new Error("Routes - 404 not found");
  });
};

export default routes;
