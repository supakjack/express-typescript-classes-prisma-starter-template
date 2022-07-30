import { BaseRouter } from "../core/class/abstract";
import { AccountController } from "../controller";

export class AccountRouter extends BaseRouter {
  constructor() {
    super(new AccountController());
  }
}
