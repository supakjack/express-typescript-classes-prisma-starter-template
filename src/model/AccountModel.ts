import { Account } from "@prisma/client";
import { BaseModel } from "../core/class/abstract";

export class AccountModel extends BaseModel {
  public async select(): Promise<Array<Account>> {
    return await this.repository.account.findMany();
  }
}
