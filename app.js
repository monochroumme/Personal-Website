const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();

// Requiring the routes
const index = require('./routes/index')

app.set('port', (process.env.PORT || 8080));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials')
}));
app.set('view engine', 'handlebars');

// Using the routes
app.use('/', index);

app.listen(app.get('port'), () => console.log("Listening on port " + app.get('port')));
