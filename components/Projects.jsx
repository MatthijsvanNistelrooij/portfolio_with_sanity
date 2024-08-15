"use client"
import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard"
import { Button, Input } from "@headlessui/react"

const Projects = ({ projects }) => {
  const [input, setInput] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  console.log(projects)

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
    <section className="w-screen h-screen">
      <div className="flex flex-row ">
        <Input
          name="full_name"
          type="text"
          className="m-5 p-2 w-[300px]"
          value={input}
          onChange={handleInputChange}
          placeholder="Type to search"
        />
      </div>
      <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((item) => (
          <ProjectCard key={item._id} project={item} />
        ))}
      </div>
    </section>
  )
}

export default Projects
