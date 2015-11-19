var express = require('express');
var router = express.Router();

var taskStore = [
	{id:1, name: 'Fix the bug', isCompleted:false},
	{id:2, name: 'Master JS', isCompleted:false},
	{id:3, name: 'Watch movie', isCompleted:true},
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('All the tasks will be displayed here');
  res.render('tasks/index',{title:'Task Manager', list: taskStore});
});

router.get('/new', function(req, res, next) {
  //res.send('All the tasks will be displayed here');
  res.render('tasks/new',{title:'New Task'});
});

router.post('/new', function(req, res, next) {
  //res.send('All the tasks will be displayed here');
  var taskName = req.body.txtTask,
  	  taskId = taskStore.reduce(function(result, task){
  	  		return result > task.id ? result : task.id;
  	  },0)+1;

  var newTask = {
  	id : taskId,
  	name : taskName,
  	isCompleted : false
  };

  taskStore.push(newTask);
  res.redirect('/tasks');

});

module.exports = router;
