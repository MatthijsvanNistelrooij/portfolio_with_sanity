const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "github",
      title: "Github",
      type: "string",
    },
    {
      name: "specs",
      title: "Specs",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
  ],
}

export default project
