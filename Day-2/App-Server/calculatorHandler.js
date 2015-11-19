var calculator = require('./calculator'),
    qs = require('querystring');

module.exports = function(req, res){
    if (req.url.pathname === '/calculator' && req.method === 'GET'){
        var operation = req.url.query.operation,
            n1 = parseInt(req.url.query.n1, 10),
            n2 = parseInt(req.url.query.n2, 10);
        var result = calculator[operation](n1, n2);
        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === '/calculator' && req.method === 'POST'){
            var operation = req.body.operation,
                n1 = parseInt(req.body.n1, 10),
                n2 = parseInt(req.body.n2, 10);
            var result = calculator[operation](n1, n2);
            res.write(result.toString());
            res.end();
        });
    }
}
