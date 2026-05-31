# Personal Project Showcase App

A simple React application that allows users to add a project, search existing projects, and manage personal projects. The application demonstrates React fundamentals including component-based architecture, state management with hooks, event handling, responsive design, and unit testing with Jest and React Testing Library.

## Features

* Add new projects dynamically using a title and a description
* View a list of created projects
* Search projects by title or description
* Delete projects
* Responsive design for desktop, tablet, and mobile devices
* Unit tests using Jest and React Testing Library

## Technologies Used

* React
* Vite
* JavaScript
* CSS3
* Jest
* React Testing Library

## Project Structure

```text
src/
│
├── components/
│   ├── Header/
│   │   └── Header.jsx
│   │
│   ├── AddAProjectForm/
│   │   └── AddAProjectForm.jsx
│   │
│   └── ProjectsContainer/
│       ├── SearchAProject/SearchAProject
│       │   └── SearchAProjectBar.jsx
│       │
│       └── ListofProjects/
│           ├── AProjectItem/
│           │   └── AProject.jsx
│           │
│           └── ListofProjects.jsx
│
├── tests/
│   ├── App.test.jsx
│   ├── AddAProjectForm.test.jsx
│   ├── ListofProjects.test.jsx
│   └── SearchAProjectBar.test.jsx
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```
## Prerequisites

You only need a modern web browser (Chrome, Firefox, Safari, Edge) to run this application.

## Installation

Clone the repository:

```bash
git clone https://github.com/KayteNjeri/single-page-application-portfolio-platform
```

Navigate to the project directory:

```bash
cd  single-page-application-portfolio-platform-with-react
```

Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```text
http://localhost:5173
```

## Running Tests

Execute all unit tests:

```bash
npm test
```

## Test Coverage

The application includes tests for:

* Adding new projects through form submission
* Rendering the application title
* Displaying initial projects
* Rendering the search component

## Responsive Design

The application adapts to different screen sizes using CSS media queries:

* Desktop 
* Tablet View
* Mobile 

Features include:

* Flexible layouts
* Responsive forms
* Mobile-friendly buttons
* Scalable typography

## Usage

1. Enter a project title
2. Enter a project description.
3. Click **Add** to save it.
4. Use the search bar to search/filter projects.
5. Click the delete button to remove a project.

## Roadmap / Future Improvements

* Edit existing projects
* Persist projects using local storage
* Project categories and tags
* Dark mode support
* Backend API integration
* User authentication

## Learning Outcomes

This project demonstrates:

* React component architecture
* State management using `useState`
* Props and component relationship
* Event handling
* Responsive web design
* Unit testing with Jest and React Testing Library
* Code organization and maintainability

## Author

Developed as part of a React Single Page Application project for showcasing projects.

## Licence

This project is licensed under the MIT License. 

