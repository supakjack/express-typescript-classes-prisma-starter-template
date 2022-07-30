import { IResponseRestFul } from "../@core/interface";
import { AccountModel } from "./../model";
import { BaseController } from "../@core/base";
import { Request, Response } from "express";
import { Account } from "@prisma/client";
// declare module "express-session" {
//   interface Session {
//     username: string;
//     password: string;
//   }
// }
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

  // public post(request: Request, response: Response) {
  //   console.log("HE::P");
  //   const { username, password } = request.body;
  //   console.log(username, password);
  //   console.log(request.body);
  //   console.log(request.session);
  //   request.session.username = username;
  //   request.session.password = password;
  //   console.log(request.session);
  //   response.json({ data: request.session });
  // }
}
