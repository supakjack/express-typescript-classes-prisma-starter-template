import { PrismaClient } from "@prisma/client";
import { IRestFulModel } from "../type/interface";

export abstract class ApplicationModel implements IRestFulModel {
  constructor(protected repository: PrismaClient = new PrismaClient()) {}
  select() {
    throw new Error("Model - Method select not implemented.");
  }
  insert() {
    throw new Error("Model - Method insert not implemented.");
  }
  update() {
    throw new Error("Model - Method update not implemented.");
  }
  delete() {
    throw new Error("Model - Method delete not implemented.");
  }
}
