import log4js from "log4js";

module LoggerModule {
    log4js.configure({
        appenders: { 'file': { type: 'file', filename: `logs/file.log` } },
        categories: { default: { appenders: ['file'], level: 'debug' } }
    })

    export const logger = log4js.getLogger();

    logger.level = "debug";
}

export const logger = LoggerModule.logger;