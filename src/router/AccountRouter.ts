import { BaseRouter } from "../@core/base";
import { AccountController } from "../controller";

export class AccountRouter extends BaseRouter {
  constructor() {
    super(new AccountController());
  }
}
