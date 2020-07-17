import React from 'react'

import ProgressiveImage from './ProgressiveImage'

function Project({ project }) {
  const thumbnail = {
    alt: project.title,
    src: project.img,
  }

  return (
    <div className="project">
      <div className="project__inner">
        <a
          className="project__thumbnail"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project__thumbnail-img">
            <ProgressiveImage image={thumbnail} />
          </div>
          <h3 className="project__title">{project.name}</h3>
        </a>
      </div>
    </div>
  )
}

export default Project
