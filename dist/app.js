"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const genenral_1 = require("./helpers/genenral");
const logger_1 = __importDefault(require("./helpers/logger"));
index_1.default.listen((0, genenral_1.ENV)("PORT"), () => {
    logger_1.default.info(`server connected successfully to port ${(0, genenral_1.ENV)("PORT")}`);
});
