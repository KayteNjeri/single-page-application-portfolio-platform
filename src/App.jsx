import { useState } from "react";
import './App.css';

import Header from "./components/Header/Header";
import AddAProjectForm from "./components/AddAProjectForm/AddAProjectForm";
import SearchAProject from "./components/ProjectsContainer/SearchAProject/SearchAProject/SearchAProjectBar";
import ListofProjects from "./components/ProjectsContainer/ListofProjects/ListofProjects";

function App() {
  // State for Title input field
  const [title, setTitle] = useState("");
  // State for Description input field
  const [description, setDescription] = useState("");
  // State for storing the projects
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
    //a function to add a new project
    const addProject = (e) => {
      e.preventDefault(); //prevent page refresh when a form is submitted

      if (!title.trim() || !description.trim()) return; //helps avoid adding empty projects
      //creation of a new project
      const newProject = {
        id: Date.now(),
        title,
        description,
        };
        // add projects to the existing list
      setProjects([...projects, newProject]);
      setTitle(""); //clear title input field
      setDescription(""); //clear description input field
      };
      //Function to delete a project
    const deleteProject = (id) => {
      setProjects(
        projects.filter((project) => project.id !== id)
        );
      };
    //function to filter projects using search
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
