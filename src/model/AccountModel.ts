import { Account } from "@prisma/client";
import { BaseModel } from "../@core/base";

export class AccountModel extends BaseModel {
  public async select(): Promise<Array<Account>> {
    return await this.repository.account.findMany();
  }
}
