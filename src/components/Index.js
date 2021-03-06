import React, { useState, useEffect } from "react"
// import axios from 'axios'

// import API from '../utils/API'
import projects_data from "../data/projects"
// import Repo from './Repo'
import Timeline from "./Timeline"
// import Project from "./Project"

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
    setProjects(projects_data)
    setIsLoading(false)
  }, [projects])

  return (
    <>
      <h2 className="pb-6 mb-0 text-4xl font-black tracking-wide">
        Experience
      </h2>
      <Timeline />
      {/*<div className="flex flex-col flex-wrap -mx-3 sm:flex-row">
        {projects.map(project => (
          <Project key={project._id} project={project} />
        ))}
      </div>*/}
    </>
  )
}

export default Index
