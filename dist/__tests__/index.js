"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var type_1 = require("../type");
var EagletMailService_1 = require("EagletMailService");
describe("Post", function () {
    it("sparkpost", function () { return __awaiter(_this, void 0, void 0, function () {
        var myContainer, mailConfig, mailService, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    myContainer = new inversify_1.Container();
                    mailConfig = {
                        transaction: {
                            api: "6ca19d3a-aee4-447f-b3b7-ccd2b3983385",
                            options: {
                                sandbox: false
                            }
                        },
                        from: "chungchi300@hotmail.com",
                        type: "sparkpost"
                    };
                    myContainer.bind(type_1.default.mailConfig).toConstantValue(mailConfig);
                    myContainer.bind(type_1.default.mailService).to(EagletMailService_1.EagletMailService);
                    mailService = myContainer.get(type_1.default.mailService);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mailService.mail({ to: "jeff", html: "ddd", subject: "jeff" })];
                case 2:
                    _a.sent();
                    expect(false).toBe(true);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    expect(true).toBe(true);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it("log ", function () { return __awaiter(_this, void 0, void 0, function () {
        var myContainer, mailConfig, mailService;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    myContainer = new inversify_1.Container();
                    mailConfig = {
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
                    mailService = myContainer.get(type_1.default.mailService);
                    return [4 /*yield*/, mailService.mail({ to: "jeff", html: "ddd", subject: "jeff" })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=index.js.map