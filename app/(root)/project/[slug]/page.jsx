/* eslint-disable @next/next/no-img-element */
"use client"
import { client, urlFor } from "@/sanity/lib/client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { AiFillGithub } from "react-icons/ai"

const fetchProjectAndRelated = async (slug) => {
  try {
    const projectQuery = `*[_type == "project" && slug.current == $slug][0]`
    const projectsQuery = '*[_type == "project"]'

    const project = await client.fetch(projectQuery, { slug })
    const projects = await client.fetch(projectsQuery)

    return { project, projects }
  } catch (error) {
    console.error("Error fetching product data:", error)
    return { project: null, projects: [] }
  }
}

const ProjectDetails = ({ params }) => {
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState(null)
  const { slug } = params

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const { project: fetchedProject, projects: fetchedProjects } =
        await fetchProjectAndRelated(slug)

      setProject(fetchedProject)
      setProjects(fetchedProjects)
    }

    fetchData()
  }, [slug])

  const { image, name, specs, github, url } = project || {}
  const images = projects.flatMap((proj) => proj.image)

  return (
    <div>
      <div className="p-5 w-[80vw] overflow-hidden">
        <h2 className="text-4xl font-bold p-2 text-white">{name}</h2>
        <div className="flex flex-col md:flex-row">
          <div>
            {image && image[index] && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img
                  src={urlFor(image[index]).url()}
                  className="w-auto"
                  alt={name || "Product Image"}
                />
              </a>
            )}
          </div>
          <div className="text-white p-2 bg-gradient-to-b from-indigo-700 lg:min-w-[400px] relative ">
            <p>{specs}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
