import { IRestFulController } from "../../interface";

export abstract class BaseController implements IRestFulController {
  public get(): void {
    throw new Error("Controller - Method get not implemented.");
  }
  public post(): void {
    throw new Error("Controller - Method post not implemented.");
  }
  public put(): void {
    throw new Error("Controller - Method put not implemented.");
  }
  public patch(): void {
    throw new Error("Controller - Method patch not implemented.");
  }
  public delete(): void {
    throw new Error("Controller - Method delete not implemented.");
  }
}
