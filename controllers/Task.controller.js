const Task = require("../models/task");

const TaskController = {
    async create (req, res) {
        try {
            const task = await Task.create(req.body);
            res.status(201).json(task);
          } catch (error) {
            res.status(400).json({ message: error.message });
          }
    },
    async getAll (req,res) {
        try {
            const tasks = await Task.find();
            res.json(tasks);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
    },
    async getID (req, res) {
        try {
            const task = await Task.findById(req.params._id);
            if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
            res.json(task);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
    },
    async markCompleted (req, res) {
        try {
            const task = await Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true });
            if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
            res.json(task);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
    },
    async changeTitle (req, res) {
        try {
            const task = await Task.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true });
            if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
            res.json(task);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
    },
    async deleteTask (req, res) {
        try {
            const task = await Task.findByIdAndDelete(req.params._id);
            if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
            res.json({ message: 'Tarea eliminada' });
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
    }
}

module.exports = TaskController;

