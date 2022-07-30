import { BaseModel } from "../core/class/abstract";

export class AccountModel extends BaseModel {
  public async select() {
    return await this.repository.account.findMany();
  }
}
