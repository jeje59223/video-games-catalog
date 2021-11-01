import express = require('express');
import { Request, Response } from 'express';
import * as GamesServices from '../../services/games/games.services';

const router = express.Router();

// permet d'afficher les games
router.get('', async (req: Request, res: Response) => {
  res.send(await GamesServices.getGames());
});

// permet d'afficher les screenshots
router.get('/:gamesId/screenshots', async (req: Request, res: Response) => {
    res.send(await GamesServices.getScreenshotsByGameId(req.params.gameId));
});

// permet d'afficher un jeu
router.get('/:gameId', async (req: Request, res: Response) => {
  res.send(await GamesServices.getGameById(req.params.gameId));
});



module.exports = router;
