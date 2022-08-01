// import
const express = require('express');
const expresslayouts = require('express-ejs-layouts');

const app = express();
const port = 5500;

// static files
app.use(express.static('public'));

// set templating engine
app.use(expresslayouts);
app.set('layout', './layouts/full-width');
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page'})
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', layout: './layouts/sidebar'});
});

// Listen on port 5500
app.listen(port, () => console.log(`App listening on port ${port}`));