const {createContainer,asClass,asFunction,asValue} = require('awilix');

// MAIN CONFIG
const config = require('../config');
const router = require('../routers');
const server = require('.');
// MODELS
const {UserModel} = require('../models');
// REPOSITORIES
const {UserRepository} = require('../repositories');
// SERVICE
const {UserService,AuthService} = require('../services');
// CONTROLLERS
const {AuthController} = require('../controllers');
// ROUTERS
const {AuthRouter} =require('../routers/index.router');


const container = createContainer();

container
    .register({
        config:asValue(config),
        router:asFunction(router).singleton(),
        server:asClass(server).singleton()
    })
    .register({
        UserModel:asValue(UserModel)
    })
    .register({
        UserRepository:asClass(UserRepository).singleton()
    })
    .register({
        UserService:asClass(UserService).singleton(),
        AuthService:asClass(AuthService).singleton()
    })
    .register({
        AuthController:asClass(AuthController.bind(AuthController)).singleton()
    })
    .register({
        AuthRouter:asFunction(AuthRouter).singleton()
    })

module.exports = container;