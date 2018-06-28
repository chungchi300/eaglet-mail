import "reflect-metadata";

import { injectable, inject } from "inversify";
import { MailService, MailOption, MailConfig } from "./interface";
import log from "./lib/log";
import sparkpost from "./lib/sparkpost";
import TYPE from "./type";
@injectable()
export class EagletMailService implements MailService {
  @inject(TYPE.mailConfig) mailConfig: MailConfig;

  async mail(mailOptions: MailOption) {
    switch (this.mailConfig.type) {
      case "log":
        return await log(mailOptions, this.mailConfig);

      case "sparkpost":
        return sparkpost(mailOptions, this.mailConfig);

      default:
        throw new Error("wrong config ");
    }
  }
}
