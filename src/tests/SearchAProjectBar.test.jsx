import { render, screen } from "@testing-library/react";
import SearchAProjectBar from "../components/ProjectsContainer/SearchAProject/SearchAProject/SearchAProjectBar";

test("renders search input", () => {
  render(
    <SearchAProjectBar
      searchTerm=""
      setSearchTerm={() => {}}
    />
  );

  const searchInput = screen.getByPlaceholderText(
    "Search a Project..."
  );

  expect(searchInput).toBeInTheDocument();
});