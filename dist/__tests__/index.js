"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const type_1 = require("../type");
const EagletMailService_1 = require("EagletMailService");
describe("Post", () => {
    // it("sparkpost", async () => {
    //   const myContainer = new Container();
    //   let mailConfig: MailConfig = {
    //     transaction: {
    //       api: "6ca19d3a-aee4-447f-b3b7-ccd2b3983385",
    //       options: {
    //         sandbox: false
    //       }
    //     },
    //     from: "chungchi300@hotmail.com",
    //     type: "sparkpost"
    //   };
    //   myContainer.bind<MailConfig>(TYPE.mailConfig).toConstantValue(mailConfig);
    //   myContainer.bind<MailService>(TYPE.mailService).to(EagletMailService);
    //   const mailService = myContainer.get<MailService>(TYPE.mailService);
    //   console.log()
    //   try {
    //     await mailService.mail({ to: "jeff", html: "ddd", subject: "jeff" });
    //     expect(false).toBe(true);
    //   } catch (err) {
    //     expect(true).toBe(true);
    //   }
    // });
    it("log ", async () => {
        const myContainer = new inversify_1.Container();
        let mailConfig = {
            transaction: {
                api: "6ca19d3a-aee4-447f-b3b7-ccd2b3983385",
                options: {
                    sandbox: false
                }
            },
            from: "chungchi300@hotmail.com",
            type: "log"
        };
        myContainer.bind(type_1.default.mailConfig).toConstantValue(mailConfig);
        myContainer.bind(type_1.default.mailService).to(EagletMailService_1.EagletMailService);
        const mailService = myContainer.get(type_1.default.mailService);
        console.log("the mail service", mailService);
        await mailService.mail({ to: "jeff", html: "ddd", subject: "jeff" });
    });
});
//# sourceMappingURL=index.js.map