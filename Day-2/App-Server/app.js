var middlewares = [];

function app(req, res){
    function exec(req, res, middlewares){
       var first = middlewares[0],
           remaining = middlewares.slice(1),
           next = function(){
               exec(req, res, remaining);
           };
       if (first)
           first(req, res, next);
   }
   exec(req, res, middlewares);
};

app.use = function(middleware){
    middlewares.push(middleware);
};

module.exports = app;
