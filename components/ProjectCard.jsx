/* eslint-disable @next/next/no-img-element */

import React from "react"
import Link from "next/link"
import { urlFor } from "../sanity/lib/client"

const ProjectCard = ({ project: { image, name, slug } }) => {
  return (
    <>
      <Link
        href={`/project/${slug.current}`}
        className="bg-transparent text-white cursor-pointer m-1"
      >
        <div>{name}</div>
        <div>
          <img
            src={urlFor(image && image[0]).url()}

            className="product-image"
            alt="image"
          />
        </div>
      </Link>
    </>
  )
}

export default ProjectCard
