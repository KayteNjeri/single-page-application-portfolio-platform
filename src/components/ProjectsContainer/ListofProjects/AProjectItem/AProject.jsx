function AProject({
    project,
    deleteProject,
}) {
    return (
        <li>
                <button 
                    className="delete-button" 
                    onClick={() => 
                    deleteProject(project.id)}>X</button>
                <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                </div>
              </li>
    );
}

export default AProject;