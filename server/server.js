const express = require('express');
const next = require('next');
const config = require('config');
const bodyParser = require('body-parser');

const routeArticle = require('./routes/article');
const routeArticles = require('./routes/articles');
const routeCategory = require('./routes/category');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare()
  .then(() => {

    const server = express();

    server.use(bodyParser.json());

    //server.get('/article/:id', routeArticle.get);

    // server.get('/article/:id', (req, res ) => {
    //   app.render(req, res, '/articles', { article: 'test'});
    // })

    server.get('/article/:id', routeArticle.get(app));

    server.get('/category/:category', routeCategory.get(app));

    server.get('/api/articles', routeArticles.get);

    server.get('*', handler);

    server.listen(config.get('PORT'), () => {
      console.log(`<< listening PORT ${config.get('PORT')}  e-commerce`);
    })

  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
  })

module.exports = app;