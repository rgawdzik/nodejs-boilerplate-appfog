/*
 * GET index
 */
exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

/*
 * GET anotherPage
 */
exports.anotherPage = function(req, res){
    res.render('anotherPage', { title: 'Express' });
};