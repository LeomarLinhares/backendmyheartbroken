const register = require('express').Router();

const { userPageController } = require('../controller/userPage.controller');

register.get('/', userPageController)

module.exports = register;