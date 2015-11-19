/* Sync */
function f1Sync(){
    console.log('f1 is invoked');
    console.log('f1 is completed');
}
function f2Sync(){
    console.log('f2 is invoked');
    console.log('f2 is completed');
}
function f3Sync(){
    console.log('f3 is invoked');
    console.log('f3 is completed');
}
function f4Sync(){
    console.log('f4 is invoked');
    console.log('f4 is completed');
}

var syncFns = [f1Sync, f2Sync, f3Sync, f4Sync];

module.exports.runSync = function(){
    for(var i=0; i<syncFns.length; i++){
        var syncFn = syncFns[i];
        syncFn();
    }
}

/* Async */
function f1(next){
    console.log('f1 is invoked');
    setTimeout(function(){
        console.log('f1 is completed');
        if (next)
            next();
    },3000)
}
function f2(next){
    console.log('f2 is invoked');
    setTimeout(function(){
        console.log('f2 is completed');
        if (next)
            next();
    },3000)
}
function f3(next){
    console.log('f3 is invoked');
    setTimeout(function(){
        console.log('f3 is completed');
        if (next)
            next();
    },3000)
}
function f4(next){
    console.log('f4 is invoked');
    setTimeout(function(){
        console.log('f4 is completed');
        if (next)
            next();
    },3000)
}

var fns = [f1, f2, f3, f4];

module.exports.run = function(){
   function exec(fns){
       var first = fns[0],
           remaining = fns.slice(1),
           next = function(){
               exec(remaining);
           }
       if (first)
           first(next);
   }
    exec(fns);
}
