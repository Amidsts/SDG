import winston from "winston"

const logFormat =  winston.format.printf( 
    (
        { level, message, timestamp, stack }
    ) => {

    return `${timestamp} ${level}: ${stack || message}`
})

const transport = {
    file: new winston.transports.File({
        filename: "error.log",
        level: "silly"
    }),
    console: new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp(),
            logFormat
        )
    })
}

// if (process.env.NODE_ENV !== "development" ) {
//     transport.console = new winston.transports.Console()
// }

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({format: 'YYY-MM-DD HH-mm-ss'}),
        winston.format.errors(),
        logFormat
    ),
    transports:[
        transport.file,
        transport.console
    ]
})


export default logger