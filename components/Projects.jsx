"use client"
import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard"
import SearchBar from "./SearchBar"

const Projects = ({ projects }) => {
  const [input, setInput] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    const filtered = projects.filter(
      (project) =>
        project?.specs?.toLowerCase().includes(input.toLowerCase()) ||
        project?.name?.toLowerCase().includes(input.toLowerCase())
    )
    setFilteredProjects(filtered)
  }, [input, projects])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <section className="w-screen h-full bg-gray-800">
      <SearchBar input={input} handleInputChange={handleInputChange} />

      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3 min-h-screen">
        {filteredProjects.map((item) => (
          <ProjectCard key={item._id} project={item} />
        ))}
      </div>
    </section>
  )
}

export default Projects
