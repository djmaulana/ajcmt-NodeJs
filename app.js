const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { homePage, login, newUser, empty } = require('./public/js/controller.js');

const app = express();
const PORT = 5000;

// use ejs template engine
app.set('view engine', 'ejs');
app.use(expressLayout);

app.use(express.static(__dirname + '/public'));


app.get('/', homePage);

app.get('/login', login);

app.get('/created', newUser);

app.use('/:empty', empty);


app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});