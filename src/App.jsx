import './App.css';

function App() {
    return (
      <div>
        <section>
          <h1>Personal Project Showcase App</h1>
        </section>

        <section className="add-project">
          <form>
            <h1>Add Project</h1>
            <h3>Title</h3>
            <input type="text" />
            <h3>Description</h3>
            <input type="text" />
            <button type="submit">Add</button>
          </form>
        </section>

        <section className="projects-container">
          
          <form> 
            <input type="text" placeholder="Search a Project..." />
            <button type="submit">Search</button>
          </form>
       
          <ul>
           <li>
            <button className="delete-button">X</button>
            <div>
              <h3>Project 1</h3>
              <p>Description of the project</p>
            </div>
            </li>
            
            <li>
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
  
          </ul>
        </section>
      </div>
  );
}

export default App
