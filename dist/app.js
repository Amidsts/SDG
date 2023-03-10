"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const genenral_1 = require("./helpers/genenral");
const logger_1 = __importDefault(require("./helpers/logger"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect((0, genenral_1.ENV)("URI")).then(res => {
    logger_1.default.info(`db connected`);
}).catch(err => {
    logger_1.default.error(`can't connect to db`);
});
const PORT = (0, genenral_1.ENV)("PORT") || 7000;
index_1.default.listen(PORT, () => {
    logger_1.default.info(`server connected successfully to port ${PORT}`);
});
