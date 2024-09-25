const express = require('express');
const Task = require('../models/task');
const router = express.Router();
const TaskController = require("../controllers/Task.controller")
// otra opción const {create, getAll, getID, markCompleted, changeTitle, deleteTark} = TaskController;
// en este caso recomendado no hacer destructuring por si tenemos más controladores especificar a cuál queremos acceder


router.post('/create', TaskController.create);
router.get('/', TaskController.getAll);
router.get('/id/:_id', TaskController.getID);
router.put('/markAsCompleted/:_id', TaskController.markCompleted);
router.put('/id/:_id', TaskController.changeTitle);
router.delete('/id/:_id', TaskController.deleteTask);

module.exports = router;