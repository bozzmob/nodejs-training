var express = require('express');
var router = express.Router();

var taskStore = [
	{id:1, name: 'Fix the bug', isCompleted:false},
	{id:2, name: 'Master JS', isCompleted:false}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('All the tasks will be displayed here');
  res.render('tasks/index',{title:'Task Manager', list: taskStore});
});

module.exports = router;
