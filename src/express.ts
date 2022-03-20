import express from "express";
import { logger } from "./logger";

export module ExpressModule {
    const app = express();

    const port = 3000;

    app.get('/', (req, res) => {
        res.send("Hello World!");
    });

    export function start() {
        app.listen(port, () => {
            logger.info(`Listening at http://localhost:${port}`);
        });
    }
}