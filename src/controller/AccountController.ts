import { AccountModel } from "./../model";
import { BaseController } from "../core/class/abstract";

export class AccountController extends BaseController {
  constructor(private accountModel: AccountModel = new AccountModel()) {
    super();
  }
  public get(): void {
    this.accountModel.select();
  }
}
