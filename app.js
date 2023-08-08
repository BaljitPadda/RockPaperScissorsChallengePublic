import bodyParser from 'body-parser';
import express from 'express';
const app = express();
const port = 3000;
const host = 'localhost';

import { router as index } from './routes/index.js';
import { router as game } from './routes/game.js';
import { router as turn } from './routes/turn.js';

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', index);
app.use('/game', game);
app.use('/turn', turn);

app.listen(port, host, () => {
    console.log(`Listening at http://localhost:${port}`);
});

export default app;