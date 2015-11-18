/*
Sync
*/

function addSync(x,y){
	console.log('[ServProv]add invoked for ',x. 'and',y);
	var result = x+y;
	console.log('[ServProv] returning the result');
	return result;
}


function addSyncClient(x,y)
{
	console.log('[ServCons] invoking add');
	var result = addSync(x,y);
	console.log('result = ',result);
}