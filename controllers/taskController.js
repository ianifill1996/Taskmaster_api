import Task from '../models/Task.js';
import Project from '../models/Project.js';

export const createTask = async (req, res) => {
  const project = await Project.findById(req.params.projectId);
  if (!project || project.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  const task = await Task.create({ ...req.body, project: project._id });
  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const project = await Project.findById(req.params.projectId);
  if (!project || project.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  const tasks = await Task.find({ project: project._id });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.taskId).populate('project');
  if (!task || task.project.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  Object.assign(task, req.body);
  await task.save();
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.taskId).populate('project');
  if (!task || task.project.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  await task.remove();
  res.json({ message: 'Task removed' });
};