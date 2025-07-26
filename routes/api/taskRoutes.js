import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from '../../controllers/taskController.js';

const router = express.Router({ mergeParams: true });

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:taskId')
  .put(updateTask)
  .delete(deleteTask);

export default router;
