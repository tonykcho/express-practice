import log4js from "log4js";
import winston from "winston";
// import ecsFormat from "@elastic/ecs-winston-format";

module LoggerModule {

    export const logger = winston.createLogger({
        level: 'debug',
        // format: ecsFormat(),
        transports: [
            new winston.transports.Console({ format: winston.format.simple() }),
            new winston.transports.File({ filename: `logs/file.log`, format: winston.format.simple() })
        ]
    });
    // log4js.configure({
    //     appenders: { 'file': { type: 'file', filename: `logs/file.log` } },
    //     categories: { default: { appenders: ['file'], level: 'debug' } }
    // })

    // export const logger = log4js.getLogger();

    // logger.level = "debug";
}

export const logger = LoggerModule.logger;