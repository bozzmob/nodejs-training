/*
Sync
*/
function addSync(x,y){
    console.log('[SP] add invoked for ', x , ' and ', y);
    if (!x || !y){
        throw new Error('invalid arguments');
    }
    var result = x + y;
    console.log('[SP] returing the result');
    return result;

}

function addSyncClient(x,y){
    console.log('[SC] invoking add');
    try{
        var result = addSync(x,y);
        console.log('[SC] result = ', result);
    } catch (e){
        console.log('[SC] something went wrong');
    }
}

module.exports.addSyncClient = addSyncClient;

function add(x,y, onResult){
    console.log('[SP] add invoked for ', x , ' and ', y);
    setTimeout(function(){
        if (!x || !y){
            var e = new Error('invalid arguments');
            onResult(e, null);
            return;
        }
        var result = x + y;
        console.log('[SP] returing the result');
        if (typeof onResult === 'function'){
            onResult(null, result);
        }
    }, 3000);
}

function addClient(x,y){
    console.log('[SC] invoking add');
    add(x,y, function( err, result){
        if (err){
            console.log('[SC] something went wrong');
            return;
        }
        console.log('[SC] result = ', result);
    });
    console.log('[SC] finished triggerin add');
}

module.exports.addClient = addClient;
