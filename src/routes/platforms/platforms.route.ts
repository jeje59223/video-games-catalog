import express = require('express');
import { Request, Response } from 'express';
import * as PlatformsServices from '../../services/platforms/platforms.services';

const router = express.Router();

// permet d'afficher les platforms
router.get('', async (req: Request, res: Response) => {
    res.send(await PlatformsServices.getPlatforms());
});

// permet d'afficher une platform
router.get('/:platformId', async (req: Request, res: Response) => {
    res.send(await PlatformsServices.getPlatformId(req.params.platformId))
})

module.exports = router;
