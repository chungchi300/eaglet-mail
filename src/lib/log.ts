import { MailOption, MailConfig } from "../interface";

export default async function mail(
  emailData: MailOption,
  mailConfig: MailConfig
) {
  console.log(
    "email send to log because testing environment",
    emailData,
    mailConfig
  );
}
