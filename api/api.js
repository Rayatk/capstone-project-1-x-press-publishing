const express = require('express');
const artistsRouter = require('./artists');
const seriesRouter = require('./series');

const apiRouter = express.Router();

apiRouter.use('/artists', artistsRouter);
apiRouter.use('/series', seriesRouter);

module.exports = apiRouter;