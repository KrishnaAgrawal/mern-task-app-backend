const Task = require("../model/taskModel");

// create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

// get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

// get single task
const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    console.log("task::::::::::::", task);
    if (!task) {
      return res.status(404).json(`No Task Found: ${req.params.id}`);
    }
    res.status(200).json(task);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

// delete a task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json(`No Task Found: ${req.params.id}`);
    }
    res.status(200).send("Task has been deleted");
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

// update a the task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json(`No Task Found: ${req.params.id}`);
    }

    res.status(200).json(task);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

// patch - update a sigle field in the database
const patchTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json(`No Task Found: ${req.params.id}`);
    }

    res.status(200).json(task);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
  patchTask,
};
