var fs = require('fs');
var filename = process.argv[2];
if (!filename){
    console.log('error - filename is required');
    console.log('Usage : node printFileSync.js [filename]');
    return;
}
try{
    var contents = fs.readFileSync(filename, {encoding : 'utf8'});
    console.log(contents);
    console.log("-------------------- EOF --------------");
} catch (e){
    console.log('something went wrong');
    console.log(e);
}
