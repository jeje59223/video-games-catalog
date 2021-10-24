import * as GamesServices from "./src/services/games/games.services"
import { Request, Response } from "express";
import express = require("express");

const morgan = require('morgan');

const server = express();
const port = process.env.PORT;

server.use(morgan("dev"));
server.listen(port);

server.get('/', (req: Request, res: Response) => {
    console.log('coucou 22');
    res.send('HELLO WORLD !');
})

// permet d'afficher les games
server.get('/games', async (req: Request, res: Response) => {
    res.send(await GamesServices.getGames());
})

// permet d'afficher un jeu
server.get('/games/:gameId', async (req: Request, res: Response) => {
    res.send(await GamesServices.getGameById(req.params.gameId))
})

// page d'erreur
server.use((error: any, req:any, res: any, suite: any) => {
    res.status(error.status || 500);
    // suite(error);
    res.send('Page not found !');
})
