# TaskMaster API

A secure RESTful API backend for managing users, projects, and tasks. Built with Node.js, Express, MongoDB, and JWT-based authentication.

## Features
- User Registration & Login (with hashed passwords)
- Project CRUD with ownership-based access
- Task CRUD nested under Projects
- JWT authentication & route protection

## Tech Stack
- Node.js
- Express
- MongoDB & Mongoose
- bcrypt
- JWT (jsonwebtoken)
- dotenv

## API Endpoints

### Users
- `POST /api/users/register` — Register new user
- `POST /api/users/login` — Login and get token

### Projects (Protected)
- `POST /api/projects` — Create project
- `GET /api/projects` — Get all projects (logged-in user)
- `GET /api/projects/:id` — Get single project (ownership check)
- `PUT /api/projects/:id` — Update project
- `DELETE /api/projects/:id` — Delete project

### Tasks (Nested & Protected)
- `POST /api/projects/:projectId/tasks` — Add task to project
- `GET /api/projects/:projectId/tasks` — List tasks of a project
- `PUT /api/tasks/:taskId` — Update task (ownership via parent project)
- `DELETE /api/tasks/:taskId` — Delete task (same ownership check)

## Setup

1. Clone the repo:
   bash
   git clone https://github.com/yourusername/taskmaster-api.git
   cd taskmaster-api

2.	Install dependencies:
      npm install

3.	Create a .env file:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_super_secret_key
PORT=5000

4. Run the server:
    npm run dev

## Project Structure 
taskmaster-api/
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
│   └── projectController.js
│   └── taskController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
│   └── Project.js
│   └── Task.js
├── routes/
│   └── api/
│       └── userRoutes.js
│       └── projectRoutes.js
│       └── taskRoutes.js
├── utils/
│   └── generateToken.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
