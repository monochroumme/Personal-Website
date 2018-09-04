const express = require('express');
const indexRouter = express.Router();

// Routes
indexRouter.get('/', (req, res, next) => {
  let whichOne = (Math.random() > 0.5 ? true : false);
  res.render('index.hbs', {
    homeBg: '<div id="home-bg-' + (whichOne ? 1 : 2) + '" class="home-bg">',
    color: (whichOne ? 'black' : 'white'),
    includes: '<link rel="stylesheet" href="/css/index.css">',
    scripts: '<script type="text/javascript" src="js/main.js"></script>'
  });
});

module.exports = indexRouter;
