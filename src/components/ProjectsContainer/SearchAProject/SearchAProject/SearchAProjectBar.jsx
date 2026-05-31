function SearchAProjectBar({
    searchTerm,
    setSearchTerm,
}) {
    return (
        <form onSubmit={(e) => e.preventDefault()}> 
            <input 
            type="text" 
            placeholder="Search a Project..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>

            <button type="submit">Search</button>
          </form>
       
    );
}

export default SearchAProjectBar;