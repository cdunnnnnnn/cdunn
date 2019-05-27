import React, { useState } from 'react'

function Project({ project }) {
  return (
    <div className="flex-grow sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4 overflow-hidden">
      <div className="relative w-full h-64">
        <a
          className="abosulte inset-0 block w-full h-full overflow-hidden bg-center bg-cover thumbnail"
          style={{ backgroundImage: `url("${project.img}")` }}
          href={project.url}
        />
        <h3 className="absolute bottom-0 text-white text-xl text-shadow-sm sm:text-2xl md:text-3xl font-bold pb-6 pl-6">
          {project.name}
        </h3>
      </div>
    </div>
  )
}

export default Project
