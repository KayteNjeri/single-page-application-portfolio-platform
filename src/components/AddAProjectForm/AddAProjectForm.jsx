function AddProjectForm({
    title,
    description,
    setTitle,
    setDescription,
    addProject,
}) {
    return (
        <section className="add-project">
          <form onSubmit={addProject}>
            <h1>Add Project</h1>

            <h3>Title</h3>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}/>

            <h3>Description</h3>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}/>

            <button type="submit">Add</button>
          </form>
        </section>
    );
}

export default AddProjectForm;