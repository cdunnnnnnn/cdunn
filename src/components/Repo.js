import React, { useState } from 'react'

function Repo({ repo }) {
  return (
    <div className="flex-grow sm:max-w-sm bg-gray-100 rounded overflow-hidden shadow-lg p-6 m-2">
      <a href={repo.html_url}>{repo.name}</a>
      {repo.description && <p className="block">{repo.description}</p>}
      <span className="block">{`Langauge: ${repo.language}`}</span>
      <span className="block">{`Starred: ${repo.stargazers_count}`}</span>
      <span className="block">{`Forks: ${repo.forks}`}</span>
    </div>
  )
}

export default Repo
