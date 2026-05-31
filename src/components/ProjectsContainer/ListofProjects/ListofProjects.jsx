import AProject from "./AProjectItem/AProject";


function ListofProjects ({
    projects,
    deleteProject,
}) {
    return (
        <ul>
            {projects.map((project) => (
               <AProject
                    key={project.id}
                    project={project}
                    deleteProject={deleteProject}
                    />
            ))}
        </ul>
    );
}

export default ListofProjects;