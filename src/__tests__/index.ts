import { mail } from "container";
describe("Post", () => {
  it("search", async () => {
    mail({ to: "jeff", subject: "test", html: "asdasd" });
  });
});
