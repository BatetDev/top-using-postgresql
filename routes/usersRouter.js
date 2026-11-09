const { Router } = require('express');
const usersRouter = Router();
const usersController = require('../controllers/usersController');

usersRouter.get('/', usersController.getUsernames);
usersRouter.get('/new', usersController.createUsernameGet);
usersRouter.post('/new', usersController.createUsernamePost);
usersRouter.get('/delete', usersController.deleteAllGet);
usersRouter.post('/delete', usersController.deleteAllPost);

module.exports = usersRouter;
