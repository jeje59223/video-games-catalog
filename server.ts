import { Request, Response } from "express";
import express = require("express");
const gamesRouter = require("./src/routes/games/games.route");

const morgan = require('morgan');

export const server = express();
const port = process.env.PORT;

server.use(morgan("dev"));
server.listen(port);

server.get('/', (req: Request, res: Response) => {
    console.log('coucou 22');
    res.send('HELLO WORLD !');
})

// page d'erreur
server.use((error: any, req:any, res: any, suite: any) => {
    res.status(error.status || 500);
    // suite(error);
    res.send('Page not found !');
})

server.use("/games", gamesRouter);
