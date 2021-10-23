import * as GamesServices from "./src/services/games/games.services"
import { Request, Response } from "express";
import axios from "axios";
import express = require("express");

const morgan = require('morgan');

const server = express();

server.use(morgan("dev"));
server.listen(3000);

server.get('/', (req: Request, res: Response) => {
    console.log('coucou 22');
    res.send('HELLO WORLD !');
})

// permet d'afficher les games
server.get('/games', async (req: Request, res: Response) => {
    res.send(await GamesServices.getGames());
})

// permet d'afficher un jeu
server.get('/games/:id', async(req: Request, res: Response) => {
    const id = 43242;
    const response = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=6fb12de45eaa45b2b0e1546d2e762d0e`
    );
    res.send(response.data);
})

// page d'erreur
server.use((error: any, req:any, res: any, suite: any) => {
    res.status(error.status || 500);
    // suite(error);
    res.send('Page not found !');
})
