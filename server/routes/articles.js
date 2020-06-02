const articles = require('../../data/articles');

exports.get = (req, res) => {
  //console.log( '!!! Articles', articles );
  

  res.send(articles);

  // setTimeout(() => {
  //   res.send(articles);
  // }, 3000);
} 