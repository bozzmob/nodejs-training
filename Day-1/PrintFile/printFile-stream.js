var fs = require('fs');
var filename = process.argv[2];
if (!filename){
    console.log('error - filename is required');
    console.log('Usage : node printFile.js [filename]');
    return;
}
var stream = fs.createReadStream(filename, {encoding : 'utf8'});
/*
var readCount = 0;
stream.on('data', function(chunk){
    console.log(chunk);
    ++readCount;
});
*/
stream.on('end', function(){
    console.log("-------------------- EOF --------------");
    //console.log('readCount = ', readCount);
});


stream.on('error', function(err){
    console.log('something went wrong');
    console.log(err);
});

stream.pipe(process.stdout);
