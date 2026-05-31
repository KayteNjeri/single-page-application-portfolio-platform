import { useState } from "react";
import './App.css';

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
        <section>
          <h1>Personal Project Showcase App</h1>
        </section>

        <section className="add-project">
          <form onSubmit={addProject}>
            <h1>Add Project</h1>
            <h3>Title</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <h3>Description</h3>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button type="submit">Add</button>
          </form>
        </section>

        <section className="projects-container">
          
          <form onSubmit={(e) => e.preventDefault()}> 
            <input type="text" 
            placeholder="Search a Project..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <button type="submit">Search</button>
          </form>
       
          <ul>
            {filteredProjects.map((project) => (
              <li key={project.id}>
                <button 
                className="delete-button" onClick={() => deleteProject(project.id)}>X</button>
                <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                </div>
              </li>
            ))}
            
           {/*<li>
            <button className="delete-button">X</button>
            <div>
              <h3>Project 2</h3>
              <p>Description of the project</p>
            </div>
            </li>
          
            <li>
            <button className="delete-button">X</button>
            <div>
              <h3>Project 3</h3>
              <p>Description of the project</p>
            </div>
            </li>
            */}
  
          </ul>
        </section>
      </div>
  );
}

export default App;
