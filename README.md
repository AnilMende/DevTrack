DevTrack

A full-stack project and task management application built with Next.js, TypeScript, MongoDB, and Tailwind CSS.

DevTrack allows users to create and manage projects, organize tasks, track task status and priority, and monitor overall project progress through a dashboard.

## 🚀 Live Demo

Live Application:
https://deploy-mern-app-gxlw.vercel.app/

GitHub Repository:
https://github.com/AnilMende/DevTrack

## 📌 Overview

DevTrack was built as a hands-on project to understand and apply Next.js with TypeScript while building both the frontend and backend within a single application.

Instead of using a separate Express.js backend, DevTrack uses the Next.js App Router, Server Components, and Route Handlers to implement the complete full-stack architecture.

The application includes:

Project management
Task management
Project details
Project editing and deletion
Task status and priority management
Dashboard statistics
MongoDB database integration
API validation using Zod
Form handling with React Hook Form
Responsive UI with Tailwind CSS

### ✨ Features

## 📊 Dashboard

The dashboard provides an overview of the application's current state:

Total Projects
Total Tasks
Completed Tasks
Pending Tasks

The statistics are calculated directly from MongoDB.

## 📁 Project Management

Users can:

View all projects
Create new projects
View project details
Edit projects
Delete projects
Track project status

Supported project statuses:

ACTIVE
COMPLETED
ARCHIVED

## ✅ Task Management

Tasks can be organized within projects using:

Task title
Description
Status
Priority
Due date
Project association

Supported task statuses:

TODO
IN_PROGRESS
COMPLETED

Supported priorities:

LOW
MEDIUM
HIGH

## 🔐 API Validation

Request data is validated using Zod before it reaches the database.

This prevents invalid data from being stored and provides structured validation errors.

## 📱 Responsive UI

The application is built using Tailwind CSS and is responsive across:

Desktop
Tablet
Mobile
🛠️ Tech Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
React Hook Form
Backend
Next.js Route Handlers
Node.js runtime
MongoDB
Mongoose
Validation
Zod
@hookform/resolvers
Development Tools
Git
GitHub
Postman
ESLint
Deployment
Vercel
MongoDB Atlas

## 🏗️ Architecture

DevTrack uses the Next.js App Router to handle both frontend and backend functionality.

                    DevTrack
                       │
              ┌────────┴────────┐
              │                 │
         Frontend           Backend
              │                 │
       React / Next.js     Route Handlers
              │                 │
       Server Components  API Endpoints
              │                 │
              └────────┬────────┘
                       │
                    Mongoose
                       │
                       ↓
                  MongoDB Atlas
                  
## Data Flow

For example, creating a project follows this flow:

Create Project Form
        ↓
React Hook Form
        ↓
Zod Validation
        ↓
POST /api/projects
        ↓
Route Handler
        ↓
Mongoose
        ↓
MongoDB Atlas
        ↓
Response
        ↓
Projects Page

## 📂 Project Structure

The main project structure is:

devtrack/
│
├── app/
│   ├── api/
│   │   ├── projects/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       └── route.ts
│   │   │
│   │   └── test-db/
│   │       └── route.ts
│   │
│   ├── projects/
│   │   ├── page.tsx
│   │   ├── new/
│   │   │   └── page.tsx
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── edit/
│   │           └── page.tsx
│   │
│   └── page.tsx
│
├── components/
│   ├── dashboard/
│   ├── projects/
│   └── ...
│
├── lib/
│   ├── mongodb.ts
│   ├── dashboard.ts
│   └── validations/
│
├── models/
│   ├── Project.ts
│   └── Task.ts
│
├── types/
│   └── index.ts
│
├── public/
│
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
🔌 API Endpoints
Projects
Get all projects
GET /api/projects

Returns the available projects.

Create a project
POST /api/projects

Example request:

{
  "name": "DevTrack",
  "description": "Project and task management application",
  "status": "ACTIVE"
}
Get a project
GET /api/projects/:id

Returns a specific project.

Update a project
PATCH /api/projects/:id

Example:

{
  "name": "DevTrack 2.0",
  "description": "Updated project management application",
  "status": "ACTIVE"
}
Delete a project
DELETE /api/projects/:id

Deletes the specified project.

🗄️ Database

DevTrack uses MongoDB with Mongoose for database operations.

Project

A project contains:

_id
name
description
status
createdAt
updatedAt
Task

A task contains:

_id
title
description
projectId
status
priority
dueDate
createdAt
updatedAt

Tasks are associated with projects through:

projectId
⚙️ Getting Started
1. Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL
cd devtrack
2. Install dependencies
npm install
3. Configure environment variables

Create a .env.local file:

MONGODB_URI=your_mongodb_connection_string

If your application uses another environment variable such as:

APP_URL=http://localhost:3000

add that as well.

Never commit .env.local to GitHub.

4. Start the development server
npm run dev

Open:

http://localhost:3000
5. Build for production
npm run build
6. Start the production server
npm start
🚀 Deployment

DevTrack is deployed using Vercel.

The production architecture is:

GitHub
   ↓
Vercel
   ↓
Next.js Application
   ↓
Route Handlers / Server Components
   ↓
Mongoose
   ↓
MongoDB Atlas

Environment variables are configured through the Vercel project settings rather than being stored in the repository.

🧠 What I Learned

This project was primarily built to gain practical experience with Next.js and TypeScript.

Key concepts implemented:

Next.js App Router
Server Components
Client Components
Dynamic Routes
Route Handlers
REST API development
MongoDB integration
Mongoose models
TypeScript interfaces and types
Zod schema validation
React Hook Form
Server-side data fetching
Client-side navigation
Dynamic dashboard statistics
CRUD operations
Tailwind CSS
Environment variables
Production builds
Vercel deployment

One of the important architectural concepts learned through this project was that Next.js can handle both frontend rendering and backend API functionality in the same application, eliminating the need for a separate Express server for this type of application.

🔮 Future Improvements

Possible future improvements include:

User authentication and authorization
User-specific projects
Complete task CRUD interface
Task filtering and searching
Project progress indicators
Drag-and-drop task management
Pagination
Advanced dashboard analytics
Notifications
Dark mode
Activity history
Automated testing
CI/CD pipeline

These features were intentionally kept outside the scope of the initial project to keep DevTrack focused on learning and implementing the core Next.js full-stack architecture.

👨‍💻 Author

Anil

B.Tech — Artificial Intelligence & Data Science

Interested in:

Full-Stack Development
Backend Engineering
Artificial Intelligence
