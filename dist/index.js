"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }))
    .use(((0, cors_1.default)()))
    .use((0, helmet_1.default)())
    .use((0, morgan_1.default)("tiny"));
exports.default = app;
