import React from 'react'

function Project({ project }) {
  return (
    <div className="flex-grow sm:w-1/2 md:w-1/3 overflow-hidden px-3 mb-6">
      <div className="relative w-full h-64">
        <a
          className="abosulte inset-0 block w-full h-full overflow-hidden bg-center bg-cover thumbnail"
          style={{ backgroundImage: `url("${project.img}")` }}
          href={project.url}
        />
        <h3
          className="absolute bottom-0 text-white text-xl text-shadow-sm sm:text-2xl md:text-3xl font-bold pb-6 pl-6"
          style={{ textShadow: '1px 0 2px rgba(0,0,0,0.35)' }}
        >
          {project.name}
        </h3>
      </div>
    </div>
  )
}

export default Project
