import express from "express";
import cookieParser from "cookie-parser";
import { logger } from "./logger";

export module ExpressModule {
    export const app = express();

    const port = 4000;

    app.use(cookieParser());

    app.use(express.json());

    var numbers: number[] = [];

    app.get('/', (req, res) => {
        var authCookie: string = req.cookies.auth;

        if (authCookie == null)
        {
            res.statusCode = 401;
            res.send("Unauthorized");
            return;
        }

        const keyValue = authCookie.split(':');

        const name = keyValue[0];
        const value = keyValue[1];

        if (value != 'tony')
        {
            res.statusCode = 403;
            res.send("Forbidden");
            return;
        }

        res.send(value);
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

    app.post('/signIn', (req, res) => {
        const body: { username: string, password: string } = req.body;

        // if (body.username != 'tony' || body.password != 'pwd')
        // {
        //     res.statusCode = 401;
        //     return;
        // }

        res.cookie('auth', `name:${body.username}`);
        res.statusCode = 200;
        res.send();
        return;
    });

    export function start() {
        app.listen(port, () => {
            logger.info(`Listening at http://localhost:${port}`);
        });
    }
}