import React from 'react'

function Project({ project }) {
  return (
    <div className="project">
      <div className="project__inner">
        <a
          className="project__thumbnail"
          style={{ backgroundImage: `url("${project.img}")` }}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        />
        <h3 className="project__title">{project.name}</h3>
      </div>
    </div>
  )
}

export default Project
