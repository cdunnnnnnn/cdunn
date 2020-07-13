import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// import API from '../utils/API'
import Data from '../data/Data'
// import Repo from './Repo'
import Project from './Project'

function Index() {
  const [projects, setProjects] = useState([])
  // const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const reposData = await API.get('/users/cdunnnnnnn/repos')
    //
    //     setRepos(reposData.data)
    //   } catch (event) {
    //     console.log(`😱 Request failed ${event}`)
    //   } finally {
    //     setIsLoading(false)
    //   }
    // }

    // fetchData()
    setProjects(Data)
    setIsLoading(false)
  }, [projects])

  return (
    <>
      <h2 className="text-4xl font-black pb-6 mb-0">Recent Projects</h2>
      <div className="flex flex-col sm:flex-row flex-wrap -mx-3">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </>
  )
}

export default Index
