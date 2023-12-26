const login = require('express').Router();

const { loginController } = require('../controller/login.controller');

login.post('/', loginController)

module.exports = login;