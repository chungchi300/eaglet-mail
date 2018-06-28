"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(mailOptions, mailConfig) {
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
}
exports.default = default_1;
//# sourceMappingURL=sparkpost.js.map