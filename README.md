# Full-Stack Docker Project: Node, NestJS, React, Mongo, Material-UI

## Project Overview
This repository demonstrates best practices in full-stack development using Docker, Node, NestJS, React, and Mongo with Material-UI. It features a multi-database architecture for efficient load distribution and encourages contributions for workflow and maintenance enhancements.

### Key Features:
- Authentication and authorization with password hashing.
- Form validation on the front-end.
- Step debugging in VS Code.

## Dependencies
- **Docker**: For containerization.
- **MongoDB**: NoSQL database.
- **Nest.js**: Efficient, scalable server-side applications.
- **React JS**: Front-end development.
- **Material UI**: UI component library.

## Setup Instructions

### Initial Configuration
1. Clone the repository.
2. Replace all `{PROJECT_NAME}` placeholders in files including `docker-compose.yml`, `Makefile`, and `.env` files.
3. Ensure the project name matches the root directory name.

### Environment Setup
- Update `.env` files in both client and app directories.

### Backend Setup
1. Navigate to the `/app` directory.
2. Install Nest.js CLI globally: `yarn add -g @nestjs/cli`
3. Install dependencies: `yarn`
4. Build and start the back-end Docker containers: `make up`
5. For a quiet mode (suppresses console output): `make up-silent`

### Frontend Setup
1. Open a new terminal and go to the `/client` directory.
2. Install dependencies: `yarn`
3. Build and start the front-end environment: `make up`

### MongoDB Configuration
- Retrieve MongoDB connection strings:
  - Outside Docker: Run `make db` in the `/app` directory.
  - Inside Docker: Use the URL provided in the documentation.

### Accessing the Application
- Backend: [http://localhost:3002](http://localhost:3002)
- Frontend: [http://localhost:3000](http://localhost:3000)

### Optional Custom Domain Setup
- Update `/etc/hosts` for custom development domains, e.g., `localhost:3000 my-site.dev`.

## VS Code Debugging
- Launch.json configuration is provided for debugging NestJS in Docker.

## Command Reference
| Command | Description |
|--|--|
| `help` | Lists available commands. |
| `up` | Builds and starts the app with logging. |
| `build` | Rebuilds the app container. |
| `up-silent` | Starts the app in the background. |
| `down` | Stops and removes containers. |
| `stop` | Stops running containers. |
| `shell` | Accesses the main app container. |
| `shell-db` | Accesses the MongoDB container. |
| `db` | Retrieves MongoDB connection string. |

## Additional Resources
- coming soon.
