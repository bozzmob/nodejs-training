var fs = require('fs');
var filename = process.argv[2];
if (!filename){
    console.log('error - filename is required');
    console.log('Usage : node printFile.js [filename]');
    return;
}

fs.readFile(filename, {encoding : 'utf8'}, function(err, contents){
    if (err){
        console.log('something went wrong');
        console.log(err);
        return;
    }
    console.log('file contents are read');
    console.log(contents);
    console.log("-------------------- EOF --------------");
});
