import { mailConfig } from "container";
import { MailOptions } from "./interface";
module.exports = async function(mailOptions: MailOptions) {
  const SparkPost = require("sparkpost");
  const client = new SparkPost(mailConfig.transaction.api);
  await client.transmissions.send({
    options: mailConfig.transaction.options,
    content: {
      from: mailConfig.from,
      subject: mailOptions.subject,
      html: mailOptions.html
    },
    headers: {
      CC: "chungchi300@hotmail.com"
    },
    recipients: [{ address: mailOptions.to }]
  });
};
