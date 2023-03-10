"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const logFormat = winston_1.default.format.printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});
const transport = {
    file: new winston_1.default.transports.File({
        filename: "error.log",
        level: "silly"
    }),
    console: new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.timestamp(), logFormat)
    })
};
// if (process.env.NODE_ENV !== "development" ) {
//     transport.console = new winston.transports.Console()
// }
const logger = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.timestamp({ format: 'YYY-MM-DD HH-mm-ss' }), winston_1.default.format.errors(), logFormat),
    transports: [
        transport.file,
        transport.console
    ]
});
exports.default = logger;
