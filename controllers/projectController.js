import Project from '../models/Project.js';

export const createProject = async (req, res) => {
  const project = await Project.create({ ...req.body, user: req.user._id });
  res.status(201).json(project);
};

export const getProjects = async (req, res) => {
  const projects = await Project.find({ user: req.user._id });
  res.json(projects);
};

export const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project || project.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  res.json(project);
};

export const updateProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project || project.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  Object.assign(project, req.body);
  await project.save();
  res.json(project);
};

export const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project || project.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  await project.remove();
  res.json({ message: 'Project removed' });
};