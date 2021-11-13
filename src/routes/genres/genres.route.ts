import express = require('express');
import { Request, Response } from "express";
import * as GenresServices from "../../services/genres/genres.services";

const router = express.Router();

// affiche les genres
router.get('', async (req: Request, res: Response) => {
    res.send(await GenresServices.getGenres());
});

module.exports = router;
