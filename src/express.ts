import express from "express";
import { logger } from "./logger";

export module ExpressModule {
    export const app = express();

    const port = 3000;

    app.use(express.json());

    var numbers: number[] = [];

    app.get('/', (req, res) => {
        res.send(numbers);
    });

    app.post('/', (req, res) => {
        const body: { id: number, text: string } = req.body;

        logger.info(body);

        if (body.id == null) {
            res.statusCode = 400;
            res.send("Bad Request!");
            return;
        }

        numbers.push(body.id);

        res.send("Got a Post request");
    })

    export function start() {
        app.listen(port, () => {
            logger.info(`Listening at http://localhost:${port}`);
        });
    }
}