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

module.exports.runSync = function(){
    f1Sync();
    f2Sync();
    f3Sync();
    f4Sync();
}

/* Async */
function f1(){
    console.log('f1 is invoked');
    setTimeout(function(){
        console.log('f1 is completed');
    },3000)
}
function f2(){
    console.log('f2 is invoked');
    setTimeout(function(){
        console.log('f2 is completed');
    },3000)
}
function f3(){
    console.log('f3 is invoked');
    setTimeout(function(){
        console.log('f3 is completed');
    },3000)
}
function f4(){
    console.log('f4 is invoked');
    setTimeout(function(){
        console.log('f4 is completed');
    },3000)
}

module.exports.run = function(){
    f1();
    f2();
    f3();
    f4();
}
