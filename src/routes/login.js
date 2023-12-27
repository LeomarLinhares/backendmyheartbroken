const login = require('express').Router();

const { loginController } = require('../controller/login.controller');
const  loginValidation  = require('../middleware/validation.login');

login.post('/', loginValidation, loginController)

module.exports = login;