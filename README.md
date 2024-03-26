# TaskGuardian API

TaskGuardian is a role-based task management system API designed to facilitate task management for teams with different roles.

## Description

TaskGuardian provides a backend system for a task management tool where users have different roles. Admins have full access to all functionalities, including creating, updating, and deleting tasks, as well as managing users and their roles. Managers have access to creating, updating, and deleting tasks, as well as assigning tasks to other users. Regular users can view, create, update, and delete tasks assigned to them.

## Features

- Role-based authentication to restrict access to API endpoints based on user roles.
- RESTful APIs for CRUD operations on tasks.
- Endpoints for assigning tasks to users and managing task statuses.
- Error handling for unauthorized access attempts and invalid requests.

## Technologies Used

- Backend Framework: [Express](https://expressjs.com/) (Node.js)
- Database: [MongoDB](https://www.mongodb.com/)
