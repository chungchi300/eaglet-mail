import { MailOptions } from "./interface";
import { mailConfig } from "container";
export default async function mail(emailData: MailOptions) {
  console.log(
    "email send to log because testing environment",
    emailData,
    mailConfig
  );
}
