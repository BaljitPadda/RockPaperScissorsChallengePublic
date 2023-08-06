import Player from '../src/player.js';
import express from 'express';
export const router = express.Router();

router.post('/', (req, res) => {
    const player = new Player([req.body.playername]);
    req.app.locals.currentPlayer = player;
    res.render('game');
})

router.post('/', (req, res) => {
    req.app.locals.currentPlayer = player;
    res.render('game');
})




