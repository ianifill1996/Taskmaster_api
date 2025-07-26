import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/api/userRoutes.js';
import projectRoutes from './routes/api/projectRoutes.js';
import taskRoutes from './routes/api/taskRoutes.js';
import { protect } from './middleware/authMiddleware.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/projects', protect, projectRoutes);
app.use('/api/projects/:projectId/tasks', protect, taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
