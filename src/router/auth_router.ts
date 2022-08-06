import { AuthController } from "./../controller/auth_controller";
import { ApplicationRouter } from "./application_router";

export class AuthRouter extends ApplicationRouter {
  constructor() {
    super(new AuthController());
  }
}
