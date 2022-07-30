import { IResponseRestFul } from "./../core/interface/IResponseRestFul";
import { AccountModel } from "./../model";
import { BaseController } from "../core/class/abstract";
import { Request, Response } from "express";

export class AccountController extends BaseController {
  public async get(request: Request, response: Response) {
    const accountModel = new AccountModel();
    const data: IResponseRestFul = {
      meta: {
        code: 200,
        message: "success",
      },
      data: await accountModel.select(),
    };
    response.json(data);
  }
}
