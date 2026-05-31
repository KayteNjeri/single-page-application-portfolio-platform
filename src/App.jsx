import { useState } from "react";
import './App.css';

import Header from "./components/Header/Header";
import AddAProjectForm from "./components/AddAProjectForm/AddAProjectForm";
import SearchAProject from "./components/ProjectsContainer/SearchAProject/SearchAProject/SearchAProjectBar";
import ListofProjects from "./components/ProjectsContainer/ListofProjects/ListofProjects";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Description of the project",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of the project",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of the project",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

    const addProject = (e) => {
      e.preventDefault();

      if (!title.trim() || !description.trim()) return;

      const newProject = {
        id: Date.now(),
        title,
        description,
        };

      setProjects([...projects, newProject]);
      setTitle("");
      setDescription("");
      };

    const deleteProject = (id) => {
      setProjects(
        projects.filter((project) => project.id !== id)
        );
      };
    
    const filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return (
      <div>
        <Header />

        <AddAProjectForm 
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          addProject={addProject}/>

        <section className="projects-container">
          
        <SearchAProject
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}/>

        <ListofProjects
          projects={filteredProjects}
          deleteProject={deleteProject}/>

         
        </section>
      </div>
  );
}

export default App;
