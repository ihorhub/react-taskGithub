import React, { useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'

export default function SecondScreen() {
  const [repo, setRepo] = useState('')
  const [repoData, setRepoData] = useState('')
  const match = useRouteMatch
  const params = useParams
  console.log(match, 'match')
  console.log(params, 'params')

  const changeHandler = (e) => {
    setRepo(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getRepo()

    //todo fetch --repositor to git
  }

  const getRepo = async () => {
    // const data=await fetch(''${}).then(res=>res.json())
    setRepoData()
  }
  console.log(repo)
  console.log(repoData)

  return (
    <div>
      hello from second page
      <div>
        <img src="" alt="avatar" />
      </div>
      <div>
        <ul>
          <li>UserName</li>
          <li>Email</li>
          <li>Location</li>
          <li> Date</li>
          <li> 8 followers</li>
          <li> Following</li>
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Repositories..."
            onChange={changeHandler}
          />
        </form>
      </div>
      {/* <SecondScrList /> */}
    </div>
  )
}
