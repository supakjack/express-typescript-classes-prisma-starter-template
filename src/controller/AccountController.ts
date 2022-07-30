import { IResponseRestFul } from "./../core/interface";
import { AccountModel } from "./../model";
import { BaseController } from "../core/class/abstract";
import { Request, Response } from "express";
import { Account } from "@prisma/client";

export class AccountController extends BaseController {
  public async get(request: Request, response: Response): Promise<void> {
    const accountModel: AccountModel = new AccountModel();
    const query: Array<Account> = await accountModel.select();
    const data: IResponseRestFul = {
      meta: {
        code: 200,
        message: "success",
      },
      data: query,
    };
    response.json(data);
  }
}
