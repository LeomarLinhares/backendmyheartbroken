const express = require('express');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', login);
app.use('/register', register);
app.use('/homePage', homePage);
app.use('/userPage', userPage);

module.exports = app;
