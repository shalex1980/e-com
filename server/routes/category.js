const articles = require('../../data/articles.json');

exports.get = (app) => {
    return (req, res) => {
        const category = req.params.category;
        const ActualPage = '/category';
        const articlesByCategory = articles.filter((item) => {
            return item.category.toLowerCase() == category;
        });

        app.render(req, res, ActualPage, {articles : articlesByCategory});
    }
}