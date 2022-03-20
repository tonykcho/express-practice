import log4js from "log4js";

module LoggerModule {
    export const logger = log4js.getLogger();

    logger.level = "debug";
}

export const logger = LoggerModule.logger;