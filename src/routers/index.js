const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const {NotFoundMiddleware,ErrorsMiddleware} =require('../middlewares');
require('express-async-errors');

module.exports = function({AuthRouter}){
    const router = express.Router();
    const apiRouter = express.Router();

    apiRouter
        .use(express.urlencoded({extended:false}))
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRouter.use('/auth',AuthRouter);
    
    router.use('/v1/api',apiRouter);
    router.use(NotFoundMiddleware);
    router.use(ErrorsMiddleware);

    return router;
}