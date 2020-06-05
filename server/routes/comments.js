const comments = require('../../data/comments.json');

exports.get = (req, res) => {
    const id = req.params.id;
    const idComments = comments.filter(item => {
        return item.id_article == id;
    })

    res.send(idComments);
}