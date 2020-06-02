const articles = require('../../data/articles.json');

exports.get = ( app ) => {
  return (req, res ) => {
    console.log('Article Route')
    const ActualPage = '/articles';
    const id  =  req.params.id - 1
    app.render( req, res, ActualPage, {article: articles[id]});
  }
}