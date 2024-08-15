"use client"
import { client } from "../../sanity/lib/client"
import { useEffect, useState } from "react"
import Projects from "@/components/Projects"

const Home = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "project"]'
      const projects = await client.fetch(query)
      setProjects(projects)
    }

    fetchData()
  }, [])

  return (
    <main className="">
      <Projects projects={projects} />
    </main>
  )
}

export default Home
