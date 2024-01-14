const register = require('express').Router();

const { registerController } = require('../controller/register.controller');
//const  registerValidation  = require('../middleware/validation.register');

register.post('/', registerController)

module.exports = register;