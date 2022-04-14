import { Request, Response } from "express";
import express = require("express");
const gamesRouter = require("./src/routes/games/games.route");
const genresRouter = require("./src/routes/genres/genres.route");
const platformsRouter = require("./src/routes/platforms/platforms.route");

const morgan = require('morgan');

export const server = express();
const BFF_PORT = process.env.BFF_PORT;

server.use(morgan("dev"));
server.listen(BFF_PORT);

server.get('/', (req: Request, res: Response) => {
    res.send('HELLO WORLD !');
})

// page d'erreur
server.use((error: any, req:any, res: any, suite: any) => {
    res.status(error.status || 500);
    // suite(error);
    res.send('Page not found !');
})

server.use("/games", gamesRouter);
server.use("/genres", genresRouter);
server.use("/platforms", platformsRouter);
